import {
  FETCH_PLAYERS_REQUEST,
  FETCH_PLAYERS_SUCCESS,
  FETCH_PLAYERS_FAILURE,
} from './playersActions'

const initialState = {
  players: [],
}

const playersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLAYERS_REQUEST:
      return {
        ...state,
      }
    case FETCH_PLAYERS_FAILURE:
      return {
        ...state,
      }
    case FETCH_PLAYERS_SUCCESS:
      return {
        ...state,
        players: action.params.players,
        sortColumn: action.params.newSortColumn,
      }
    default:
      return state
  }
}

export default playersReducer
