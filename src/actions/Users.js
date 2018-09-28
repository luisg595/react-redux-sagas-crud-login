const loadUsers = () => {
    return {
        type: 'LOAD_USERS'
    }
}

const requestDataUsersSuccess = payload => {
    return {
        type: 'REQUEST_DATA_USERS_SUCCESS',
        payload
    }
}

const addUser = () => {
    return {
        type: 'ADD_USER'
    }
}

const updateColumn = payload => {
    return {
        type: 'UPDATE_COLUMN',
        payload
    }
}

export { loadUsers, requestDataUsersSuccess, addUser, updateColumn }