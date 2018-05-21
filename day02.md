# Day 2: JavaScript/CSS as Grown-up Languages

## Agenda

1. [Why JavaScript? Why Now?](#why-javascript-why-now)
1. [Webpack](#webpack)
1. [SASS](#sass)
1. [Accessing External Data](#accessing-external-data)

## Why JavaScript? Why Now?

### Node!

Isomorphic app development

### Script Ecology!

### Powerful Browsers!

## SASS

## Webpack

*"Any sufficiently advanced technology is indistinguishable from magic."*  
*— Arthur C. Clarke*

Webpack is probably made by a wizard or group of wizards. There are some fairly big names in web development who have gone on record saying they don't understand, completely, how it works.

However, it is a really powerful and useful tool for building advanced web apps. The other nice thing about Webpack is once you have a configuration file that works, it will work for every project you write, so you only need to get it working once (or use the config script I am giving you).

### What About ES2015?

We have to load [Babel](https://babeljs.io/) to use ES2015 syntax in our projects. To do that, we have to install *a lot* of packages using NPM. You'll notice as we work through these projects there are a lot of libraries that have to be installed to use any of the technologies we discuss. This is because of modularity: modern JavaScript is designed to be small and fast (because the field has learned from the problems caused by something like jQuery), so you only load the parts of a project you actually need.

To install Babel, run the following command from within the `basic-webpack-example` directory:

```
npm i -D babel-core babel-loader babel-preset-es2015 babel-plugin-transform-runtime babel-preset-stage-0
```

It will take a while, but when it's complete, we will have Babel installed. Now we have to configure it.

There is a working Babel-ified (?) configuration file for Webpack at [`day02/basic-webpack-example/webpack.config/babel.js`](day02/basic-webpack-example/webpack.config/babel.js). To use it, we have to tell Webpack to load it. You will need to edit your [`day02/basic-webpack-example/webpack.config.js`](day02/basic-webpack-example/webpack.config.js) and change the line:

```javascript
var config = require('./weback.config/basic');
```

To read:

```javascript
var config = require('./weback.config/babel');
```

We're telling Webpack to import a different file (`babel.js` instead of `basic.js`) and use that as our Webpack config. Let's take a look at the [`babel.js`](day02/basic-webpack-example/webpack.config/babel.js) file.

Now, to see Babel in action, you can (though you don't have to) rename [`day02/basic-webpack-example/app/index.js`](day02/basic-webpack-example/app/index.js) to `index.es5.js` and rename [`day02/basic-webpack-example/app/index.babel.js`](day02/basic-webpack-example/app/index.babel.js) to `index.js` to see the ES2015 version of our really basic script.

You can run `npm run start` from the command line and Webpack will start again on [http://localhost:8080](http://localhost:8080). Check it out!

### Isn't This A Lot of Work?

Yes!

However, the great thing about Webpack is that once you get something working once (ie. Babel support or CSS loading (see below)), it will *always* work for any project. I have a master `webpack.config.js` file in a repository on my laptop that I just copy and paste from every time I am building a new project. Webpack exemplifies the DRY (Don't Repeat Yourself) ethos of contemporary web development.

### Let's load some CSS!

## Accessing External Data
