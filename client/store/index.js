import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import projects from "./projects";
import { calendarReducer } from "./calendar";
import { boardsReducer, listsReducer, cardsReducer } from "./tasks";
import user from './user';
// import profile from "./profile";

const reducer = combineReducers({ 
  auth, 
  events: calendarReducer, 
  boards: boardsReducer, 
  lists: listsReducer, 
  cards: cardsReducer, 
  projects,
  user
  });

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;

