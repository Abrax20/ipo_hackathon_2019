import { getUriFromRoute } from "../helper/url"
import { fetchError, fetchSuccess, START_FETCH_ACTION } from "../actions/api"

export const ACCEPT_HEADER = "Accept"
export const CONTENT_TYPE_HEADER = "Content-Type"
export const X_ACCESS_TOKEN_HEADER = "x-access-token"
export const APPLICATION_JSON_CONTENT_TYPE = "application/json"

export const fetchMiddleware = ({
  getState,
  dispatch
}) => next => async action => {
  const state = getState()

  next(action)
  if (action.type !== START_FETCH_ACTION) return

  const type = action.payload.type

  const options = action.payload || {}
  options.headers = options.headers || {}
  options.headers[ACCEPT_HEADER] = APPLICATION_JSON_CONTENT_TYPE
  options.headers[CONTENT_TYPE_HEADER] = APPLICATION_JSON_CONTENT_TYPE
  options.headers[X_ACCESS_TOKEN_HEADER] =
    (state.account && state.account.token) || ""

  options.timeout = 3000
  options.method = options.method || "GET"
  options.body = (options.body && JSON.stringify(options.body)) || ""

  const route = options.route
  const uri = getUriFromRoute(route)

  const callback = options.callback ? options.callback : () => {}

  try {
    const response = await fetch(uri, options)

    if (response.status !== 200) {
      const text = await response.text()
      callback(null, text)
      dispatch(fetchError(type, text, options))
      return
    }

    const responseBody = await response.json()
    callback(responseBody)
    dispatch(fetchSuccess(type, responseBody))
  } catch (err) {
    callback(null, err)
    dispatch(fetchError(type, err, options))
  }
}
export default fetchMiddleware
