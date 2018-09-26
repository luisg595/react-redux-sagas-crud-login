import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from '../reducers/combineReducers'
import rootSagas from '../sagas'

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware()

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

    const store = createStore(reducer,
        initialState,
        composeEnhancers(applyMiddleware(sagaMiddleware))
    )
    
    store.runSaga = sagaMiddleware.run(rootSagas)
    return store
}