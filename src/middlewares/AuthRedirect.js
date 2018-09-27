import history from '../history'
import { setStoreApplication, removeStoreApplication } from '../utilities/appStore'

const AuthRedirect = store => next => action => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            setStoreApplication('session', 'login', action.httpResponse)
            history.push('/')
            break
        case 'LOGOUT_SUCCESS':
            removeStoreApplication('session', 'login')
            history.push('/login')
            break
        default:
            next(action)
    }
}

export default AuthRedirect