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

Now, let's talk about styling all of this. I want to address two ideas in this section, both of which relate to CSS as a styling language:

1. CSS has a universal namespace
1. CSS is not a programming language

Both of these are basically the same complaint, which is that CSS was not developed with large-scale application development in mind. When CSS was conceived---and this is totally my argument not necessarily fact---, web development was largely a solitary pursuit: a company would hire a web designer (or maybe two) and they would make the website. Nowadays, especially with something like Facebook or Google Apps, there are thousands of people working on one application. They have to work together and with CSS especially, the have to be very careful to not overwrite one-another's work while also maintaining the same standards and formatting across the whole application.

### CSS has a universal namespace

To the first issue, one of the major problems with CSS is that every class you define is immediately available globally. This is partly by design, so that you can extend existing styles or change things from a universal template. However, what happens if two programmers, one in California and one in Munich, working on different teams on different components in a larger application both define a CSS class named `.button`?

![Chaos Reigns Fox from *Antichrist*](https://media.giphy.com/media/ahvJAdMNwrKUM/giphy.gif)

The `.button` class that gets loaded ends up being determined by which comes later in the stylesheet. Apparently, this happens *a lot*. There are a number of proposals to prevent this. One popular one is called [BEM](http://getbem.com/introduction/). BEM stands for **B**lock **E**lement **M**odifier. It works like this:

1. Components on screen are defined as *blocks*: `login-form`, `button`, `menu`, etc.
1. Components within those larger blocks are *elements* within them: `login-form__user-input`, `menu__item`
1. These elements can be modified: `button--green`, login-form__user-input--error`, `menu__item--active`

BEM is pretty neat, but there's been some serious discussion in the community about how to differentiate between blocks and elements and, I'll just add, if you have any kind of philosophical bent, *this is a rabbit hole you don't want to fall down*.

Other companies have pretty extensive CSS styleguides: [here's Medium's])(https://gist.github.com/cuibonobo/16f555c0047ab80044cf). This can work, as well.

Another way to avoid this issue in Webpack is called [CSS Modules](https://github.com/css-modules/css-modules). With CSS modules, you can write CSS files for your individual React components and import them using a Webpack plugin called `css-loader`. When you import these files, the loader automatically generates a unique name for each style. So, for instance, `.button` might become `.Buttons__button___U2Sdr`, which is not going to conflict with anything. Let's look at how this works.

### CSS is not a programming language



*show how to bundle global.scss into the main app bundle*