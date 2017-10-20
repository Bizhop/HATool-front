import {
  FETCH_PLAYER_REQUEST,
  UPDATE_PLAYER_REQUEST,
  FETCH_PLAYER_SUCCESS,
  FETCH_PLAYER_FAILURE,
} from './playerActions'

const initialState = {
  fetching: false,
}

const playersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLAYER_REQUEST:
    case UPDATE_PLAYER_REQUEST:
      return {
        ...state,
        fetching: true,
      }
    case FETCH_PLAYER_FAILURE:
      return {
        ...state,
        fetching: false,
      }
    case FETCH_PLAYER_SUCCESS:
      return {
        ...state,
        player: action.player,
        fetching: false,
      }
    default:
      return state
  }
}

export default playersReducer
