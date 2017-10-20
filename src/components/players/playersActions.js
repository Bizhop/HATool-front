export const FETCH_PLAYERS_REQUEST = 'FETCH_PLAYERS_REQUEST'
export const FETCH_PLAYERS_SUCCESS = 'FETCH_PLAYERS_SUCCESS'
export const FETCH_PLAYERS_FAILURE = 'FETCH_PLAYERS_FAILURE'

export const fetchPlayers = params => ({
  type: FETCH_PLAYERS_REQUEST,
  params,
})

export const receivePlayers = params => ({
  type: FETCH_PLAYERS_SUCCESS,
  params,
})

export const playersFetchError = error => ({
  type: FETCH_PLAYERS_FAILURE,
  players: [],
  error,
})
