import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducers } from './reducers';
import chatSaga from './sagas/chat';

const initialState = {};

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers(reducers),
  initialState,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(chatSaga);

export default store;
