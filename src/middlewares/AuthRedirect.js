import history from '../history'

const AuthRedirect = store => next => action => {
    if (action.type === 'LOGIN_SUCCESS') {
        sessionStorage.setItem('login', JSON.stringify(action.payload))
        history.push('/')
    }
    next(action)
}

export default AuthRedirect