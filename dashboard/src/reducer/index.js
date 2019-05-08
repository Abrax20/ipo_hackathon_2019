import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import processes from "./processes";

export default history =>
  combineReducers({
    processes,
    router: connectRouter(history)
  });
