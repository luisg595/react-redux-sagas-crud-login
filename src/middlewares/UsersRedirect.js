import history from '../history'

const UsersRedirect = store => next => action => {
    switch (action.type) {
        case 'REQUEST_CREATE_USER_SUCCESS':
            history.push('/users')
            break
        default:
            next(action)
    }
}

export default UsersRedirect