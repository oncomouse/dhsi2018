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
* `compose`: create more powerful functions from small chunks: `map(compose(multiply(2), add(1)))([1,2,3,4]) => [4,6,8,10]`
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
	, multiply
} from 'ramda';

const action = map(compose(
	multiply(2)
	, add(1)
))

console.log(action([1,2,3,4]))
```

This is also called point-free programming. It's considered to be clearer and more focused on what the program is doing, rather than how to implement it. This is functional programming. JavaScript can be, in addition to an OOP language, a functional language.

We've seen some of JavaScript's functional programming features in both React (stateless components are pure functions) and Redux (reducers are pure functions).

Let's look at [`day04/01-ramda`](day04/01-ramda); I put some more examples in there.

There's a lot of cool and powerful tools in [Ramda](https://ramdajs.com/docs/), so take a look through their documentation.

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

Now that we know how to make code for React/Redux/Sass apps, how can we guarantee everyone writing readable, maintainable code?

The discussion of code quality in organizations is an old one in professional programming and, thankfully, a variety of tools have emerged in recent years to automate much of the work involved in implementing style guides for professional programmers.

Two I like and recommend are [ESLint](https://eslint.org/) for JavaScript and [StyleLint](https://stylelint.io/) for CSS/SASS. Calling program quality checkers "*Lint" dates back to work done in porting UNIX at Bell Labs, when Stephen C. Johnson wrote `lint` and named it after the undesirable fibers that have to be removed from sheep's wool. So there you go.

We have some new stuff to look at in:

* `.editorconfig`
* `.eslintrc.js`
* `.stylelintrc.js`

When we have a sense of what's going on (and have run `npm install`), we can run `npm run lint` to see our Linters run (though they *both* won't, but see why by running it).

You can customize your own ruleset or use a predefined one based on your preferences (or some combination). I actually use a modified version of AirBnB ([check it here](https://github.com/oncomouse/react-redux-webpack-starter/blob/master/.eslintrc.js)) and a slightly modified version of [stylelint-config-sass-guidelines](https://github.com/bjankord/stylelint-config-sass-guidelines/) ([check it here](https://github.com/oncomouse/react-redux-webpack-starter/blob/master/.stylelintrc.json)).

### Hot Loading / HTML Webpack Plugin
* HMR Changes
	- `store/configureStore.js`
	- `index.jsx`
	- `components/utilities/ErrorBoundary.jsx` (*also talk about R.equals*)
	- `webpack.config.js`
* HTML Webpack Plugin
	- Removed `index.html`
	- Added `template/index.ejs`
* Added `APP_TITLE`
	- `webpack.config.js`
	- `store/configureStore.js`
	- `.eslintrc.js`
* Added optimizations and build stuff to `webpack.config.js`
### Testing
