export const FETCH_LINES_REQUEST = 'FETCH_LINES_REQUEST'
export const FETCH_LINES_SUCCESS = 'FETCH_LINES_SUCCESS'
export const FETCH_LINES_FAILURE = 'FETCH_LINES_FAILURE'

export const fetchLines = () => ({
  type: FETCH_LINES_REQUEST,
})

export const fetchLinesSuccess = lines => ({
  type: FETCH_LINES_SUCCESS,
  lines,
})

export const fetchLinesError = error => ({
  type: FETCH_LINES_FAILURE,
  error,
})
