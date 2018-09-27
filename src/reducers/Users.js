const initialUsers = {
    code: 0,
    results: {
        data: []
    },
    status: ''
}

const usersReducer = (state=(initialUsers), action) => {
    switch (action.type) {
        case 'REQUEST_DATA_USERS_SUCCESS':
            return {
                ...state,
                ...action.httpResponse
            }
        default:
            return state
    }
}

export default usersReducer