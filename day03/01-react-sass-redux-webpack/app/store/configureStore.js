import { createStore, combineReducers } from 'redux';
import reducers from '../ducks';

const reducer = combineReducers(reducers);
const initialState = {};
const configureStore = () => createStore(reducer, initialState);

export default configureStore;