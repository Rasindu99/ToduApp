import {createStore} from "redux";
import todoReducer from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(
  todoReducer,
  composeWithDevTools()
);

export default store;
