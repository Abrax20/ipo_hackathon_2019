import { fetchStart } from "./api";

export const FETCH_ALL_ACTIONS_ACTION = "FETCH_ALL_ACTIONS";
export const getAllActions = () => dispatch =>
  dispatch(
    fetchStart(FETCH_ALL_ACTIONS_ACTION, {
      route: "/fe/actions"
    })
  );
