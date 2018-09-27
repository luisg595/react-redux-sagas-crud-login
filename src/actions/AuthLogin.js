const login = payload => {
    return {
        type: 'LOGIN',
        payload
    }
}

const requestErrorLogin = errorDetailLogin => {
    return {
        type: 'REQUEST_ERROR_LOGIN',
        payload: {
            error: true,
            errorCode: errorDetailLogin.response.status,
            errorDetailLogin
        }
    }
}

const loginSuccess = payload => {
    return {
        type: 'LOGIN_SUCCESS',
        payload
    }
}

const logout = () => {
    return {
        type: 'LOGOUT'
    }
}

const logoutSuccess = () => {
    return {
        type: 'LOGOUT_SUCCESS'
    }
}

const requestErrorLogout = errorDetailLogout => {
    return {
        type: 'REQUEST_ERROR_LOGOUT',
        payload: {
            error: true
        }
    }
}

export { login, requestErrorLogin, loginSuccess, logout, logoutSuccess, requestErrorLogout }