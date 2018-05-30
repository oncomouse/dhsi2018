# Redux

## Agenda

1. [Managing State](#managing-state)
1. [Redux](#redux)
1. [Ducks](#ducks)
1. [Redux Side Effects](#redux-side-effects)
1. [Redux Persist](#redux-persist)

## Managing State

So the potential problem we saw yesterday is that each React component manages its own state. This is probably fine (actually, this is fine) for the ridiculously simple application we are using (actually the best way to do simple application state is with the [unstated](https://github.com/jamiebuilds/unstated) library, but file that away for later). But what happens when our app gets big?

We need something to help us centralize and manage state so that we don't have our application data spread across a whole mess of interrelated components

### Redux

Redux is one such approach that has become very common in industry. Here's a diagram of it as a state machine:

![](http://www.dotnetcurry.com/images/reactjs/redux/redux.png)

The Redux store (we'll look at how to create one in a minute) has three methods we care about:

1. `dispatch(action)` – When given an action (see below), pass this action to the reducer.
2. `getState()` – Return the current state of the state.
3. `subscribe(function)` – When given a function, call that function every time state changes.

We don't actually directly interact with any of these methods because a package we'll be using called `react-redux` does this for us, but Redux is useful outside of React (for instance, my personal website uses a Redux store for state management but does not use React). *Say more about why Redux if interest exists*.

We intervene in Redux by writing the symbols, reducers and action creators for our particular project. These three components are really simple:

#### Symbols

Each `action.type` needs a unique ID. You can use strings, but ES6 includes a `Symbol` type that is like a string except it is unique.

What that means:

```javascript
var f = Symbol('Foobar'), g = Symbol('Foobar');
f === g //false
var s = 'Foobar', t = 'Foobar';
s === t // true
```

We create symbols like any other variable:

```javascript
const ACTION = Symbol('ACTION');
```

#### Action Creators

The currency of the realm in Redux is the action. It is how UI components communicate with the store and how reducers now what to update. An action is a JavaScript object and has to have a key named `type`. By convention, any data included with the action (things like a user's name or the contents of a submitted form) is stored at the `payload` key, but this is not required.

Further, actions are created by action creators, functions that take in the `payload` of the action and return the action object. We use object creators to mask the internals of our Redux store from UI components (in case things change).

So, an object creator looks like this:

```javascript
const actionAction = ({ id, username, password}) => ({
	type: ACTION
	, payload: {
		, id
		, username
		, password
	}
});

// Call with: actionAction({username: 'Andrew', password: 'Secure'});
```

*What's going on with the return of that action creator?*

#### Reducer

A reducer is a function that takes two arguments and returns one. Particularly, it is passed `state` and a received `action`. It returns an updated copy of `state` if the `action` is meaningful to the reducer; it simply returns `state` if it is not.

Here's an example:

```javascript
const initialState = {};
const reducer = (state=initialState, action) => {
	switch(action) {
		case ACTION: return {
			...state
			, [action.payload.id]: {
				password: action.payload.password
				, username: action.payload.username
			}
		};
		default: return state;
	}
}
```

### Ducks

The term "duck" has been proposed as the packaged unit (like a "gem" in Ruby or a "bean" in Java) of a Redux setup. Each Duck contains the symbols, reducers, and action creators necessary for each portion of a Redux application.

As a rule, a Duck `export default`s it's reducer and `export`s each individual action creator.

Here's a Duck of what we've been doing in this document:

```javascript
// Symbols
const ACTION = Symbol('ACTION');
// Reducer
const initialState = {};
const reducer = (state=initialState, action) => {
	switch(action) {
		case ACTION: return {
			...state
			, [action.payload.id]: {
				password: action.payload.password
				, username: action.payload.username
			}
		};
		default: return state;
	}
}
// Action Creator
export const actionAction = ({ id, username, password}) => ({
	type: ACTION
	, payload: {
		, id
		, username
		, password
	}
});

export default reducer;
```

The last step is to wire everything up. If we have more than one reducer (which is a good way to compartmentalize our data), we would put the following in `ducks/index.js`:

```javascript
import Actions from './Actions';
import Users from './Users';

export default {
	Actions
	, Users
};
```

Then, at some point in our app, we need to create the store itself. The current view on best practices (because there are *a lot* of ways to do this) is to define a function that returns a store. So, for instance, it might look like this:

```javascript
import { combineReducers, createStore } from 'redux';
import reducers from '../ducks';

const reducer = combineReducers(reducers);
const initialState = {};
const configureStore = () => createStore(reducer, initialState);

export default configureStore;
```

*What's going on here?*

Get used to our friend, `configureStore`, because we are going to see them *a lot* during this course.

Let's look at [`day03/01-react-sass-redux-webpack`](day03/01-react-sass-redux-webpack) to see how we connect this to a React app.

## Redux Side Effects

So there are two quarks of Redux:

1. State is immutable
1. Reducers are pure functions

What this means for those of us who don't speak functional programming is that:

1. A reducer cannot return the same (by reference) state it was passed *if state has mutated (changed)*.
1. The output of a reducer can *only* depend on its input (ie there are no external data sources contacted).

*What do we think these mean?*

The second one is especially important for what we are talking about today: interacting with APIs. 

Thankfully, Redux has a really simple and powerful API for creating what is called "middleware," programs that move between the externals and internals of a software process to change the way it behaves. There are a lot of these in the Redux ecosystem. We'll eventually use ones to store the state in local memory and log errors to the console, but, for right now, we need to talk about "side effects" middleware. Side effects are the kind of things pure functions don't do, like relying on outside data. *sullen teenager voice* "But we need outside data!"

Yes, and that's why there are *a lot* of side effects middleware libraries for Redux. However, there are three that are really widely used:

1. [`redux-thunk`](https://github.com/gaearon/redux-thunk)
2. [`redux-saga`](https://redux-saga.js.org/)
3. [`redux-observable`](https://github.com/redux-observable/redux-observable)

Thunk is the easiest, but it is difficult to maintain and test. I find Saga to be the most powerful and manageable, but it is not transferrable and generators are a bit odd (to say the least). Observable is the most transferrable, as RxJS, for which this middleware is a wrapper, is used in a variety of other frameworks; however, reactive programming is an entirely different programming paradigm and requires some adjustment. (they all have fun names, though, right?)

For the purposes of this class, I am going to have us focus on thunk.

In [`day03/02-react-sass-redux-thunk-webpack`](day03/02-react-sass-redux-thunk-webpack), I've created another version of the test site but this time, there's an external API for us to play around with.

After you've run `npm install` and `npm run start`, visit this site: [http://localhost:3000/posts?_page=1&_limit=10&_order=desc&_sort=id&_embed=comments&_expand=user](http://localhost:3000/posts?_page=1&_limit=10&_order=desc&_sort=id&_embed=comments&_expand=user). *What's going on here?*

This is a CRUD API (**C**reate, **R**ead, **U**pdate, **D**estroy), which uses four HTTP operations (`POST`, `GET`, `PUT`, and `DELETE`) to interact with data. It works like this:

1. Issue a `GET` request to http://localhost:3000/posts/1 and you get the Post object with ID of 1
2. Issue a `PUT` request to the same URL, along with an encoded JSON representation of that object, and you will update the record with new data.
3. Issue a `DELETE` request to the same URL and you will delete that record.
4. Send a `POST` request to http://localhost:3000/posts and you will add a new Post object to the database.

*Explain request and fetch and why*.

## Redux Persist

Let's look at configureStore for this example.

*Also introduced the concept of an ErrorBoundary*.
