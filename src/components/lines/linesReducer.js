import { FETCH_LINES_REQUEST, FETCH_LINES_SUCCESS, FETCH_LINES_FAILURE } from './linesActions'

const initialState = {
  fetching: false,
}

const playersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LINES_REQUEST:
      return {
        ...state,
        fetching: true,
      }
    case FETCH_LINES_FAILURE:
      return {
        ...state,
        fetching: false,
      }
    case FETCH_LINES_SUCCESS:
      return {
        ...state,
        lines: action.lines,
        fetching: false,
      }
    default:
      return state
  }
}

export default playersReducer
