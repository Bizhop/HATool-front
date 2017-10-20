export const IMPORT_PLAYERS_REQUEST = 'IMPORT_PLAYERS_REQUEST'
export const IMPORT_PLAYERS_SUCCESS = 'IMPORT_PLAYERS_SUCCESS'
export const IMPORT_PLAYERS_FAILURE = 'IMPORT_PLAYERS_FAILURE'

export const importPlayers = params => ({
  type: IMPORT_PLAYERS_REQUEST,
  params,
})

export const importPlayersSuccess = () => ({
  type: IMPORT_PLAYERS_SUCCESS,
})

export const importPlayersError = error => ({
  type: IMPORT_PLAYERS_FAILURE,
  error,
})
