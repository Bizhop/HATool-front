import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import playersReducer from './components/players/playersReducer'
import playerReducer from './components/player/playerReducer'
import importReducer from './components/import/importReducer'
import linesReducer from './components/lines/linesReducer'
import userReducer from './components/user/userReducer'
import chartReducer from './components/chart/chartReducer'

const rootReducer = combineReducers({
  form: formReducer,
  players: playersReducer,
  player: playerReducer,
  import: importReducer,
  lines: linesReducer,
  user: userReducer,
  chart: chartReducer,
})

export default rootReducer
