import { always, identity } from 'ramda';
import PostAPI from '../api/Post';
import createReducer from '../utilities/createReducer';

// Symbols:
const ADD_SAMPLE_DONE = Symbol('ADD_SAMPLE_DONE');
const RESET_STORE = Symbol('RESET_STORE');
const ERROR = Symbol('ERROR');

// Reducers:
const MAX_POSTS = 99;

const initialState = [];
const actionMaps = {
  [ADD_SAMPLE_DONE]: (state, action) => [...state, action.payload.sample],
  [RESET_STORE]: always(initialState),
  [ERROR]: identity,
};

// Action Creators:

const addSampleDoneAction = sample => ({
  type: ADD_SAMPLE_DONE,
  payload: {
    sample,
  },
});
export const resetAction = () => ({
  type: RESET_STORE,
});
export const errorAction = error => ({
  type: ERROR,
  payload: {
    error,
  },
});
export const addSampleAction = () => (dispatch) => {
  const randomPostID = 1 + Math.floor(Math.random() * MAX_POSTS);
  return PostAPI.get(randomPostID)
    .then(results => dispatch(addSampleDoneAction(results.entities.posts[results.result].title)))
    .catch(error => dispatch(errorAction(error)));
};

export default createReducer(initialState, actionMaps);
