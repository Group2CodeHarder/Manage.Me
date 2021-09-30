import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import projects from "./projects";
import { calendarReducer } from "./calendar";
import { listsReducer } from "./tasks";
import profile from "./profile";

const reducer = combineReducers({
  auth,
  events: calendarReducer,
  lists: listsReducer,
  projects,
  profile,
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
// export * from './auth'
