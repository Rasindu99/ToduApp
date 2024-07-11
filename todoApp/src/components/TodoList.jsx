import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem';

const TodoList = () => {

  const filterTodos = useSelector((state) => {
    const todos = state.todos;
    const filter = state.filter;
    const searchTerm = state.searchTerm;

    return todos.filter((todo) => {
      const matchFilter = (filter === "COMPLETED" && todo.completed) ||
                          (filter === "INCOMPLETE" && !todo.completed) || 
                          (filter === "ALL");

      const matchSearch = todo.text.toLowerCase().includes(searchTerm);
      // The includes() method returns true if the searchTerm is found within the lowercase version of the text property, and false otherwise.

      return matchFilter && matchSearch

    })
  })
  console.log('Filtered Todos: ',filterTodos);

  return (
    <ul>
      <li className="my-2 text-sm italic">All Your Notes Here ...</li>
      {
        filterTodos.map((todo, index) => {
          return (
           <TodoItem key={index} todo={todo} index={index} />
          )
        })
      }
    </ul>
  )
}

export default TodoList
