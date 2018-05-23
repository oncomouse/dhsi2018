# Redux

## Agenda

1. [Managing State](#managing-state)
1. [Redux](#redux)
1. [Ducks](#ducks)
1. [Redux Side Effects](#redux-side-effects)
1. [Redux Persist Store](#redux-persist-store)

## Managing State

## Redux

## Ducks

## Redux Side Effects

So there are two quarks of Redux:

1. State is immutable
1. Reducers are pure functions

There are three ways to do side effects in Redux:

1. [`redux-thunk`](https://github.com/gaearon/redux-thunk)
2. [`redux-saga`](https://redux-saga.js.org/)
3. [`redux-observable`](https://github.com/redux-observable/redux-observable)

Thunk is the easiest, but it is difficult to maintain and test. I find Saga to be the most powerful and manageable, but it is not transferrable and generators are a bit odd (to say the least). Observable is the most transferrable, as RxJS, for which this middleware is a wrapper, is used in a variety of other frameworks; however, reactive programming is an entirely different programming paradigm and requires some adjustment. (they all have fun names, though, right?)

For the purposes of this class, I am going to have us focus on thunk.

## Redux Persist Store
