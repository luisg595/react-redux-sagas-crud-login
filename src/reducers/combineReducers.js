import { combineReducers } from 'redux'
import authLoginReducer from './AuthLogin'
import usersReducer from './Users'

export default combineReducers({
    authLoginReducer,
    usersReducer
})