const authLoginReducer = (state=[], action) => {
    switch (action.type) {
        case 'REQUEST_ERROR':
            return {
                ...state,
                error: action.payload.error,
                errorCode: action.payload.errorCode,
                errorDetail: action.payload.errorDetail
            }
        default:
            return state
    }
}

export default authLoginReducer