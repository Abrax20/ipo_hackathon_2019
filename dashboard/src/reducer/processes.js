import { SUCCESS_FETCH_ACTION } from "../actions/api";
import {
  FETCH_PROCESS_ACTION,
  FETCH_ALL_PROCESSES_ACTION
} from "../actions/api/process";

export const initialState = {};
export const processes = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_FETCH_ACTION: {
      switch (action.payload.type) {
        case FETCH_ALL_PROCESSES_ACTION: {
          const processes = {};
          action.payload.data.map(process => (processes[process.id] = process));
          return {
            ...state,
            ...processes
          };
        }
        case FETCH_PROCESS_ACTION: {
          return {
            ...state,
            [action.payload.data.id]: action.payload.data
          };
        }
        default:
          return state;
      }
    }
    default:
      return state;
  }
};
export default processes;
