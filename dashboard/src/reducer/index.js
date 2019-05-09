import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import actions from "./actions";
import processes from "./processes";

export default history =>
  combineReducers({
    actions,
    processes,
    router: connectRouter(history)
  });
