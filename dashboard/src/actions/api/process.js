import { fetchStart } from "./api";

export const FETCH_PROCESS_ACTION = "FETCH_PROCESS_ACTION";
export const FETCH_ALL_PROCESSES_ACTION = "FETCH_ALL_PROCESSES_ACTION";

export const getAllProcesses = () => dispatch =>
  dispatch(
    fetchStart(FETCH_ALL_PROCESSES_ACTION, {
      method: "GET",
      route: "/get/all"
    })
  );
export const getProcessById = id => dispatch =>
  dispatch(
    fetchStart(FETCH_PROCESS_ACTION, {
      method: "GET",
      route: `/get/search/${id}/`
    })
  );
