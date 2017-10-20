import { call, put, takeEvery } from 'redux-saga/effects'

import Api from '../Api'
import {
  receivePlayer,
  playerFetchError,
  FETCH_PLAYER_REQUEST,
  UPDATE_PLAYER_REQUEST,
} from './playerActions'
import { logout } from '../user/userActions'

function* fetchPlayer(action) {
  try {
    const player = yield call(Api.get, `api/players/${action.id}`, {
      params: {},
    })
    yield put(receivePlayer(player))
  } catch (e) {
    if (e.response.status === 403) {
      yield put(logout())
    }
    yield put(playerFetchError(e))
  }
}

function* updatePlayer(action) {
  try {
    const player = yield call(Api.put, `api/players/${action.params.id}`, action.params)
    yield put(receivePlayer(player))
  } catch (e) {
    if (e.response.status === 403) {
      yield put(logout())
    }
    yield put(playerFetchError(e))
  }
}

function* playerSaga() {
  yield [
    takeEvery(FETCH_PLAYER_REQUEST, fetchPlayer),
    takeEvery(UPDATE_PLAYER_REQUEST, updatePlayer),
  ]
}

export default playerSaga
