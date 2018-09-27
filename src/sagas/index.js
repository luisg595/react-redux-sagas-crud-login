import { call, put, take, fork } from 'redux-saga/effects'
import * as api from '../services/drivers/api'

function* login() {
    while (true) {
        try {
            const { payload } = yield take('LOGIN')
            const httpResponse = yield call(api.callApiLogin, payload)
            yield put({type: 'LOGIN_SUCCESS', httpResponse})
        }
        catch(error) {
            console.log(error)
            yield put({type: 'REQUEST_ERROR_LOGIN', error})
        }
    }
}

function* logout() {
    while (true) {
        try {
            yield take('LOGOUT')
            yield call(api.callApiLogout)
            yield put({type: 'LOGOUT_SUCCESS'})
        }
        catch(error) {
            yield put({type: 'REQUEST_ERROR_LOGOUT', error})
        }
    }
}

export default function* rootSagas() {
    yield fork(login)
    yield fork(logout)
}