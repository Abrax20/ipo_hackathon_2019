import { fetchStart } from "./api";

export const FETCH_START_PROCESS = "FETCH_START_PROCESS";
export const FETCH_PROCESS_ACTION = "FETCH_PROCESS_ACTION";
export const FETCH_ALL_PROCESSES_ACTION = "FETCH_ALL_PROCESSES_ACTION";

export const startProcess = body => dispatch =>
  dispatch(
    fetchStart(FETCH_START_PROCESS, {
      body,
      method: "POST",
      route: "/fe/processes"
    })
  );
export const getProcessById = () => {};
export const getAllProcesses = () => dispatch =>
  dispatch(
    fetchStart(FETCH_ALL_PROCESSES_ACTION, {
      route: "/fe/processes"
    })
  );
