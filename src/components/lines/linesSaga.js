import { call, put, takeEvery } from 'redux-saga/effects'

import Api from '../Api'
import { fetchLinesSuccess, fetchLinesError, FETCH_LINES_REQUEST } from './linesActions'
import { logout } from '../user/userActions'

function* fetchLines() {
  try {
    const lines = yield call(Api.get, 'api/team/best-lines', {})
    yield put(fetchLinesSuccess(lines))
  } catch (e) {
    if (e.response.status === 403) {
      yield put(logout())
    }
    yield put(fetchLinesError(e))
  }
}

function* linesSaga() {
  yield takeEvery(FETCH_LINES_REQUEST, fetchLines)
}

export default linesSaga
