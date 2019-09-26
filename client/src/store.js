import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers';
import {rootSaga} from './actions/sagaAuthForm'
// const initialState = {};
// const thunkMiddleware = [thunk];

const saga = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(saga));
saga.run(rootSaga)

export default store