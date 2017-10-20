import {
  IMPORT_PLAYERS_REQUEST,
  IMPORT_PLAYERS_SUCCESS,
  IMPORT_PLAYERS_FAILURE,
} from './importActions'

const initialState = {
  text: '',
}

const playersReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMPORT_PLAYERS_REQUEST:
      return {
        ...state,
      }
    case IMPORT_PLAYERS_FAILURE:
      return {
        ...state,
        text: action.error,
      }
    case IMPORT_PLAYERS_SUCCESS:
      return {
        ...state,
        text: 'Ok',
      }
    default:
      return state
  }
}

export default playersReducer
