const authLoginReducer = (state=[], action) => {
    switch (action.type) {
        case 'REQUEST_ERROR_LOGIN':
            console.log(action)
            return {
                ...state,
                error: action.payload.error,
                errorCode: action.payload.errorCode,
                errorDetail: action.payload.errorDetail
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}

export default authLoginReducer