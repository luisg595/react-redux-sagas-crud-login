const initialUsers = {
    code: 0,
    results: {
        data: []
    },
    status: '',
    name: '',
    email: '',
    password: ''
}

const usersReducer = (state=(initialUsers), action) => {
    switch (action.type) {
        case 'REQUEST_DATA_USERS_SUCCESS':
            return {
                ...state,
                ...action.httpResponse
            }
        case 'UPDATE_COLUMN':
            return {
                ...state,
                [action.payload.columName]: action.payload.value
            }
        case 'REQUEST_CREATE_USER_SUCCESS':
            return {
                ...state,
                ...action.httpResponse
            }
        default:
            return state
    }
}

export default usersReducer