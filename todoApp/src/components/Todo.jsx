import React, { useState } from 'react';
import { BsPlus, BsSearch } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { addTodo, updateSearchTerm } from "../redux/actions";
import FilterButton from './FilterButton';
import TodoList from './TodoList';




const Todo = () => {

  const [newTodoText, setNewTodoText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch() // This useDispatch Hook helps functional components to dispatch (provide) actions to the Redux store.
        // in this section we are storing that hook inside created variable (dispatch) then use it as reference to that hook

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  }

  const handleAddTodoClick  = () => {
    if(newTodoText.trim() !== "") {
      handleAddTodo(newTodoText.trim());
      setNewTodoText("");
    }
  }

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  }

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">PERSONAL TODO APPEAR</h2>

      {/* input text and btn ------------------------------------------------------------*/}

      <div className="flex items-center mb-5" >
        <input 
          value={newTodoText} 
          onChange={(event) => setNewTodoText(event.target.value)}
          type="text" name="addTodoInput" 
          placeholder="Add Todo" 
          className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" 
        />
        <button 
          className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          onClick={handleAddTodoClick}
        > 
          <BsPlus /> 
        </button>
      </div>

      {/* Filter and Search ------------------------------------------------------------*/}
      <div className="flex items-center justify-between">
        <FilterButton/>
        <div className="flex items-center mb-4">
          <input 
            value={searchTerm}
            onChange={(event) => handleSearchChange(event.target.value)}
            type="text"
            name="addTodoInput"
            id="addTodoInput"
            placeholder="Search Todo"
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" 
          />
          <button 
           className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
            <BsSearch /> 
          </button>
        </div>
        
      </div>

      <TodoList/>
    </div>
  );
}

export default Todo
