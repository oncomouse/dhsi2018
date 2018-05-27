# Write Good Code

## Agenda

1. [Ramda](#ramda)
1. [Code Quality](#code-quality)
1. [Testing](#testing)
1. [Hot Loading](#hot-loading)

### Ramda

* Good for immutability!
* Currying: `map(add(1))` returns a function that, when called, will add 1 to all elements in a list: `map(add(1))([1,2,3,4]) => [2,3,4,5]`
	* *Why is this helpful?*
* `compose`: create more powerful functions from small chunks: `map(compose(product(2), add(1)))([1,2,3,4]) => [4,6,8,10]`
	* *Why isn't this `[3,5,7,9]`?*
* Is there an advantage to using `map` instead of `[].map`?
	* [Fantasy Land](https://github.com/fantasyland/fantasy-land)
	* Functional composition
	* There might be a performance boost

How to use:

```javascript
import {
	add
	, compose
	, map
	, product
} from 'ramda';

const action = map(compose(
	product(2)
	, add(1)
))

console.log(action([1,2,3,4]))
```

This is also called point-free programming. It's considered to be clearer and more focused on what the program is doing, rather than how to implement it. This is functional programming. JavaScript can be, in addition to an OOP language, a functional language.

We've seen some of JavaScript's functional programming features in both React (stateless components are pure functions) and Redux (reducers are pure functions).

#### Side Note on Redux and Point Free

I prefer to implement Redux reducers differently than we have been implementing them. I use a utility function:

```javascript
export default function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
        if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
            return handlers[action.type](state, action);
        }
        return state;
    };
}
```

To use it, a duck might look like this:

```javascript
import {
	always
	, append
} from 'ramda';
import createReducer from '../utilities/createReducer';

const ACTION = Symbol('ACTION');
const RESET = Symbol('RESET');

const initialState = [];
const actionMap = {
	[ACTION]: (state, action) => append(action.payload.message, state)
	, [RESET]: always(initialState) // equivalent to: () => initialState
}

export const actionAction = message => ({
	type: ACTION
	, payload: { message }
});
export const resetAction = () => ({
	type: RESET
});

export default createReducer(initialState, actionMap);
```

* *So what happened here?*
* *Why might this be preferable?*

### Code Quality

### Testing

### Hot Loading
