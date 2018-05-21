# Redux

## Agenda

1. [Managing State](#managing-state)
1. [Redux Side Effects Libraries](#redux-side-effects-libraries)

## Managing State

## Redux Side Effects Libraries

There are three ways to do side effects in Redux:

1. [`redux-thunk`](https://github.com/gaearon/redux-thunk)
2. [`redux-saga`](https://redux-saga.js.org/)
3. [`redux-observable`](https://github.com/redux-observable/redux-observable)

Thunk is the easiest, but it is difficult to maintain and test. I find Saga to be the clearest, but it is not transferrable and generators are a bit odd. Observable is the most transferrable, as RxJS, for which this middleware is a wrapper, is used in a variety of other frameworks; however, reactive programming is an entirely different programming paradigm and requires some adjustment.
