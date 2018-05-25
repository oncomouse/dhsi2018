# Redux

## Agenda

1. [Managing State](#managing-state)
1. [Redux](#redux)
1. [Ducks](#ducks)
1. [Redux Side Effects](#redux-side-effects)
1. [Redux Persist](#redux-persist)

## Managing State

## Redux

## Ducks

## Redux Side Effects

So there are two quarks of Redux:

1. State is immutable
1. Reducers are pure functions

What this means for those of us who don't speak functional programming is that:

1. A reducer cannot return the same (by reference) state it was passed *if state has mutated (changed)*.
1. The output of a reducer can *only* depend on its input (ie there are no external data sources contacted).

*What do we think these mean?*

The second one is especially important for what we are talking about today: interacting with APIs. 

There are three ways to do side effects in Redux:

1. [`redux-thunk`](https://github.com/gaearon/redux-thunk)
2. [`redux-saga`](https://redux-saga.js.org/)
3. [`redux-observable`](https://github.com/redux-observable/redux-observable)

Thunk is the easiest, but it is difficult to maintain and test. I find Saga to be the most powerful and manageable, but it is not transferrable and generators are a bit odd (to say the least). Observable is the most transferrable, as RxJS, for which this middleware is a wrapper, is used in a variety of other frameworks; however, reactive programming is an entirely different programming paradigm and requires some adjustment. (they all have fun names, though, right?)

For the purposes of this class, I am going to have us focus on thunk.

In [`day03/02-react-sass-redux-thunk-webpack`](day03/02-react-sass-redux-thunk-webpack), I've created another version of the 

Visit this site: [http://localhost:3000/posts?_page=1&_limit=10&_order=desc&_sort=id&_embed=comments&_expand=user](http://localhost:3000/posts?_page=1&_limit=10&_order=desc&_sort=id&_embed=comments&_expand=user). *What's going on here?*

This is a CRUD API (**C**reate, **R**ead, **U**pdate, **D**estroy), which uses four HTTP operations (`POST`, `GET`, `PUT`, and `DELETE`) to interact with data. It works like this:

1. Issue a `GET` request to http://localhost:3000/posts/1 and you get the Post object with ID of 1
2. Issue a `PUT` request to the same URL, along with an encoded JSON representation of that object, and you will update the record with new data.
3. Issue a `DELETE` request to the same URL and you will delete that record.
4. Send a `POST` request to http://localhost:3000/posts and you will add a new Post object to the database.

*Show how we can replace fetch.then.catch with contents of `api/utilities/request.js`*

## Redux Persist

Let's look at configureStore for this example.

*Also introduced the concept of an ErrorBoundary*.
