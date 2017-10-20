import R from 'ramda'
import { call, put, takeEvery } from 'redux-saga/effects'

import Api from '../Api'
import { receivePlayers, playersFetchError, FETCH_PLAYERS_REQUEST } from './playersActions'
import { logout } from '../user/userActions'

function* fetchPlayers(action) {
  try {
    const players = yield call(Api.get, 'api/players', {
      params: {
        size: 100,
        sort: R.path(['params', 'sort'], action),
      },
    })
    yield put(
      receivePlayers({
        players: players.content,
        newSortColumn: action.params.newSortColumn,
      }),
    )
  } catch (e) {
    if (e.response.status === 403) {
      yield put(logout())
    }
    yield put(playersFetchError(e))
  }
}

function* playersSaga() {
  yield takeEvery(FETCH_PLAYERS_REQUEST, fetchPlayers)
}

export default playersSaga
