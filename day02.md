# Day 2: JavaScript/CSS as Grown-up Languages

## Agenda

1. [Why JavaScript? Why Now?](#why-javascript-why-now)
1. [Don't We Make Websites?](#dont-we-make-websites)
1. [React](#react)
1. [Webpack](#webpack)
1. [SASS](#sass)
1. [Accessing External Data](#accessing-external-data)

## Why JavaScript? Why Now?

### Node!

Isomorphic app development

### Script Ecology!

### Powerful Browsers!

## Don't We Make Websites?

## Webpack

*"Any sufficiently advanced technology is indistinguishable from magic."*  
*— Arthur C. Clarke*

Webpack is probably made by a wizard or group of wizards. There are some fairly big names in web development who have gone on record saying they don't understand, completely, how it works.

### PropTypes

I also added some checks using the library `prop-types` (which was once part of React itself but has since been spun off into a separate library). Here's the React documentation on how it works: [https://reactjs.org/docs/typechecking-with-proptypes.html](https://reactjs.org/docs/typechecking-with-proptypes.html).

I wanted to introduce this to you know because when we get to code quality checking, we will need to understand how PropTypes works.

### Isn't This A Lot of Work?

Yes!

However, the great thing about Webpack is that once you get something working once (ie. Babel support or CSS loading (see below)), it will *always* work for any project. I have a master `webpack.config.js` file in a repository on my laptop that I just copy and paste from every time I am building a new project. Webpack exemplifies the DRY (Don't Repeat Yourself) ethos of contemporary web development.

## SASS

*show how to bundle global.scss into the main app bundle*