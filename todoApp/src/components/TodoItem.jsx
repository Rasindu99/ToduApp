import React from 'react'
import { FaToggleOff, FaToggleOn, FaCheck, FaTimes, FaTrash } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { markCompleted, markIncomplete, removeTodo, toggleTodo } from '../redux/actions';

const TodoItem = ({todo, index}) => {

  const dispatch = useDispatch();

  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">

      <div className="flex items-center">
        <span className="mr-4 text-gray-500">{index + 1}</span>
        <span className={`mr-4 ${todo.completed ? "line-through text-red-500" :" "} `}>
          {todo.text}
        </span> {/*We are passing todo, as a prop and Now , iam using its properties */}
      </div>

      <div className="space-x-3 ml-8">
        <button 
          onClick={() => dispatch(toggleTodo(index))}
          className="mr-2 text-sm bg-blue-500 text-white sm:px-2 py-1 rounded">
            {todo.completed ? <FaToggleOff/> : <FaToggleOn/> }
        </button>

        <button 
          onClick={() => dispatch(removeTodo(index))}
          className="mr-2 text-sm bg-red-500 text-white sm:px-2 py-1 rounded">
            <FaTrash/> 
        </button>

        {
          !todo.completed && (<button 
          onClick={() => dispatch(markCompleted(index))}
          className="mr-2 text-sm bg-green-500 text-white sm:px-2 py-1 rounded">
            <FaCheck/>
        </button>)
        }

        {
          todo.completed && (<button 
          onClick={() => dispatch(markIncomplete(index))}
          className="mr-2 text-sm bg-yellow-500 text-white sm:px-2 py-1 rounded">
            <FaTimes/>
        </button>)
        }


      </div>

    </li>
  )
}

export default TodoItem
