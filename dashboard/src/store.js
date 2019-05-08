import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducer";
import fetch from "./middlewares/fetch";
import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";

export const history = createHistory();
const initialState = {};
const middleware = [thunk, fetch, routerMiddleware(history)];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

export const store = createStore(
  rootReducer(history),
  initialState,
  applyMiddleware(...middleware)
);
export default store;
