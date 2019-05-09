import { SUCCESS_FETCH_ACTION } from "../actions/api";
import { FETCH_ALL_ACTIONS_ACTION } from "../actions/api/actions";

export const initialState = {
  1: {
    id: 1,
    title: "Awesome Actioln"
  }
};
export const action = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_FETCH_ACTION: {
      switch (action.payload.type) {
        case FETCH_ALL_ACTIONS_ACTION: {
          const actions = {};
          action.payload.data.map(action => (actions[action.id] = action));
          return {
            ...state,
            ...actions
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
export default action;
