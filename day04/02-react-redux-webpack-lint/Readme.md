# react-redux-webpack-starter

This is my starter app for [React](https://reactjs.org/), [Redux](https://redux.js.org/), and [Webpack](https://webpack.js.org/). It includes [redux-thunk](https://github.com/reduxjs/redux-thunk) for side effects, including calls to APIs. It also includes support for a [persistent](https://github.com/rt2zz/redux-persist) store. The development server supports hot reloading.

The starter includes [Ramda](https://ramdajs.org) for functional programming. ES2015+ features are available via [Babel](https://babeljs.io).

For stylesheets, [node-sass](https://github.com/sass/node-sass) and a variety of [PostCSS](http://postcss.org/) plugins are installed. You can use [CSS modules](https://github.com/css-modules/css-modules) for styling components.

Testing is supported through the [Mocha](https://mochajs.org/) framework (with help from [zinserjan/mocha-webpack](https://github.com/zinserjan/mocha-webpack/)). [Chai](http://chaijs.com/) (for assertions), [Sinon](http://sinonjs.org/) (for spies, mocks, and stubs), and [Enzyme](http://airbnb.io/enzyme/) (for React testing) are all also provided. Check the `.spec.js` files in `components/`, 	`containers/`, and `reducers/` to see some examples to get started writing unit tests.

Coverage testing is supplied by [Istanbul](https://istanbul.js.org/). Code quality is checked by [ESLint](https://eslint.org/).

## Installation

Run `npm install` or `yarn install` to install packages.

## Developing

There are a number of scripts already available for supporting development:

* **Start Development Server** – `npm run start`
* **Build Production Code** – `npm run build`
* **Visualize Bundle Size** – `npm run analyze`
* **Unit Testing** – `npm run mocha`
	* `npm run mocha:watch` to live update unit tests
* **Coverage Testing** – `npm run cover`
* **Checking Code Quality** – `npm run lint`
	* `npm run lint -- --fix` to fix errors automatically

Running `npm run test` will check code quality and run unit tests.

## Customizing

In `package.json`, set the key `title` to the name of the application. This will set the cache key for redux persistence and the HTML title for the landing page (which you can change using [react-helmet](https://github.com/nfl/react-helmet), if you install it).

## Deploying

Run `yarn build` or `npm run build` to build an optimized, production version of your app. It will be in the `build/` directory.

If you add a `homepage` key to `package.json` and set it equal to the root URL of your application, the React app will set up a `ServiceWorker` to cache resources and greatly speed up your app.

## Debugging

`npm run analyze`

Also: `env NODE_ENV=production webpack --json > stats.json` and upload to [Webpack Visualizer](https://chrisbateman.github.io/webpack-visualizer/)