// On fetch start
export const START_FETCH_ACTION = "START_FETCH"
// On fetch are success
export const SUCCESS_FETCH_ACTION = "SUCCESS_FETCH"
// On fetch throws a error
export const ERROR_FETCH_ACTION = "ERROR_FETCH"

export const fetchStart = (fetchAction, payload = {}) => ({
  type: START_FETCH_ACTION,
  payload: {
    type: fetchAction,
    ...payload
  }
})
export const fetchSuccess = (fetchAction, data = {}) => ({
  type: SUCCESS_FETCH_ACTION,
  payload: {
    data,
    type: fetchAction
  }
})
export const fetchError = (fetchAction, error, options = {}) => ({
  type: ERROR_FETCH_ACTION,
  payload: {
    ...options,
    error,
    type: fetchAction
  }
})
