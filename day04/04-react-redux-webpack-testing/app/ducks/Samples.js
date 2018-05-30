import PostAPI from '../api/Post';

// Symbols:
const ADD_SAMPLE_DONE = Symbol('ADD_SAMPLE_DONE');
const RESET_STORE = Symbol('RESET_STORE');
const ERROR = Symbol('ERROR');

// Reducers:
const MAX_POSTS = 99;

const initialState = [];
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SAMPLE_DONE: return [...state, action.payload.sample];
    case RESET_STORE: return initialState;
    case ERROR: return state;
    default: return state;
  }
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

export default reducer;
