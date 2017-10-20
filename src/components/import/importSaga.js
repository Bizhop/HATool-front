import { call, put, takeEvery } from 'redux-saga/effects'
import R from 'ramda'

import Api from '../Api'
import { importPlayersSuccess, importPlayersError, IMPORT_PLAYERS_REQUEST } from './importActions'

const cookiesAsList = cookie => R.map(R.trim, R.split(';', cookie))

function* importPlayers(action) {
  try {
    yield call(Api.put, 'api/players/import', cookiesAsList(action.params.cookie))
    yield put(importPlayersSuccess())
  } catch (e) {
    yield put(importPlayersError(e))
  }
}

function* importSaga() {
  yield takeEvery(IMPORT_PLAYERS_REQUEST, importPlayers)
}

export default importSaga
