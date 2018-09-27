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

export { loadUsers, requestDataUsersSuccess }