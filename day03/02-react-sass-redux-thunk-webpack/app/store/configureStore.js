import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../ducks';

const noopReduxMiddleware = () => next => action => next(action);
const loggerMiddleware = process.env.NODE_ENV !== 'production' ? require('redux-logger').default : noopReduxMiddleware;

const reducer = combineReducers(reducers);
const initialState = {};
const enhancer = applyMiddleware(
    thunk
    , loggerMiddleware
)
const configureStore = () => createStore(reducer, initialState, enhancer);

export default configureStore;