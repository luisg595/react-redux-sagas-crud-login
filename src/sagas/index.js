import { call, put, take, fork } from 'redux-saga/effects'
import api from '../services/drivers/api'
import * as AuthLoginActions from '../actions/AuthLogin'

function* login() {
    while (true) {
        try {
            const { payload } = yield take(AuthLoginActions.login)
            const httpResponse = yield call(api, payload)
            yield put(AuthLoginActions.loginSuccess(httpResponse))
        }
        catch(error) {
            yield put(AuthLoginActions.requestError(error))
        }
    }
}

export default function* rootSagas() {
    yield fork(login)
}