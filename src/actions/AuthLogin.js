const login = payload => {
    return {
        type: 'LOGIN',
        payload
    }
}

const requestError = errorDetail => {
    return {
        type: 'REQUEST_ERROR',
        payload: {
            error: true,
            errorCode: errorDetail.response.status,
            errorDetail
        }
    }
}

const loginSuccess = payload => {
    return {
        type: 'LOGIN_SUCCESS',
        payload
    }
}

export { login, requestError, loginSuccess }