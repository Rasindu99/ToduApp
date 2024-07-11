import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, MARK_COMPLETED, MARK_INCOMPLETE, FILTER_TODO, UPDATE_SEARCH_TERM, MARK_ALL_COMPLETED } from "./actionTypes";

const initiateState = {
  todos: [],
  filter: "ALL",
  searchTerm: ""
}

const todoReducer = (state = initiateState, action) => {
  
  switch (action.type) {

    case ADD_TODO:
      return { // This is the latest state after ADD_TODO, initiate state will update to this state
        todos: [...state.todos, {text: action.payload.text, completed: false}], // this new todo added to the todos array of initiate state object
        filter: state.filter, // these properties wont changed after ADD_TODO
        searchTerm: state.searchTerm // these properties wont changed after ADD_TODO
      }
    
    case TOGGLE_TODO:
      return {
        todos: state.todos.map((todo, key) => 
          key === action.payload.id ? {...todo, completed: !todo.completed} : todo),
        filter: state.filter,
        searchTerm: state.searchTerm
      }
  
    case REMOVE_TODO:
      return {
        todos: state.todos.filter((todo, key) => // filter function looping through the todos array and its just added elements to new array
        key !== action.payload.id ), // and new array assigned to todo array, elements only true , through the condition will be added
        filter: state.filter,
        searchTerm: state.searchTerm
      }

      case MARK_COMPLETED:
        return {
          todos: state.todos.map((todo, key) => 
          key === action.payload.id ? {...todo, completed: true} : todo),
          filter: state.filter,
          searchTerm: state.searchTerm
        }

      case MARK_INCOMPLETE:
        return {
          todos: state.todos.map((todo, key) => 
          key === action.payload.id ? {...todo, completed: false} : todo),
          filter: state.filter,
          searchTerm: state.searchTerm
        }

        case FILTER_TODO:
          return {
            todos: state.todos,
            filter: action.payload.filter,
            searchTerm: state.searchTerm
          }

        case UPDATE_SEARCH_TERM:
          return {
            todos: state.todos,
            filter: state.filter,
            searchTerm : action.payload.searchTerm
          }

        case MARK_ALL_COMPLETED:
          return {
            todos: state.todos.map((todo, key) => ({...todo, completed: true})),
            filter: state.filter,
            searchTerm: state.searchTerm
          }

    default:
     return state
  }
}

export default todoReducer;