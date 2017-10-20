export const FETCH_PLAYER_REQUEST = 'FETCH_PLAYER_REQUEST'
export const FETCH_PLAYER_SUCCESS = 'FETCH_PLAYER_SUCCESS'
export const FETCH_PLAYER_FAILURE = 'FETCH_PLAYER_FAILURE'
export const UPDATE_PLAYER_REQUEST = 'UPDATE_PLAYER_REQUEST'

export const fetchPlayer = id => ({
  type: FETCH_PLAYER_REQUEST,
  id,
})

export const receivePlayer = player => ({
  type: FETCH_PLAYER_SUCCESS,
  player,
})

export const playerFetchError = error => ({
  type: FETCH_PLAYER_FAILURE,
  player: {},
  error,
})

export const updatePlayer = params => ({
  type: UPDATE_PLAYER_REQUEST,
  params,
})
