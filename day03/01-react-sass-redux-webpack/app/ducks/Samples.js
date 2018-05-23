// Symbols:
const ADD_SAMPLE = Symbol('ADD_SAMPLE');
const RESET_STORE = Symbol('RESET_STORE');

// Reducers:
const SAMPLE_LENGTH = 36;
const STRING_LENGTH = 8;
function randomString() {
    return Math.random()
        .toString(SAMPLE_LENGTH)
        .replace(/[^a-z]+/g, '')
        .substr(0, STRING_LENGTH - 1);
}

const initialState = [];
const reducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_SAMPLE: return [...state, randomString()];
        case RESET_STORE: return initialState;
        default: return state;
    }
}

// Action Creators:

export const addSampleAction = () => ({
    type: ADD_SAMPLE
})
export const resetAction = () => ({
    type: RESET_STORE
})
/*
export const moreInterestingAction = name => ({
    type: MORE_INTERESTING_ACTION
    , payload: {
        name
    }
})
*/

export default reducer;