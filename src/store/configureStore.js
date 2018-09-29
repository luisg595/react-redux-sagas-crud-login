import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from '../reducers/combineReducers'
import rootSagas from '../sagas'
import AuthRedirect from '../middlewares/AuthRedirect'
import UsersRedirect from '../middlewares/UsersRedirect'

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware()

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

    const store = createStore(reducer,
        initialState,
        composeEnhancers(applyMiddleware(sagaMiddleware, AuthRedirect, UsersRedirect))
    )
    
    store.runSaga = sagaMiddleware.run(rootSagas)
    return store
}