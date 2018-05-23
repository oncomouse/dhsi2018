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

So many cool tools!

### Powerful Browsers!

iPhone has more power than a Cray 2 Supercomputer

## Don't We Make Websites?

## React

React is an example of what's called a "framework" in JavaScript development, along with technologies such as Ember, Angular, and VUE.js. There are a lot of reasons to develop web applications with frameworks, but the main one is something we saw in the previous example: that basic website was a stylistic mess. The code is hard to read, the DOM API is a nightmare, there's no organization to the code. If this app gets any bigger, it will get messy and chaotic really fast. Moreover, there is a conceptual problem: we are having to figure [out how to keep our application state in sync with our UI](https://medium.com/dailyjs/the-deepest-reason-why-modern-javascript-frameworks-exist-933b86ebc445) and that's really, really hard with vanilla JavaScript.

*What do we mean by "application state" & "UI"?*

Beyond the limitations of JavaScript, web applications are hard to build because of the three technologies involved (HTML, CSS, and JavaScript), only one of them is actually a programming language: JavaScript. As much we may need to generate a bunch of HTML elements using a `for` loop, it can't be done. All the major web frameworks are trying, in various ways, to make HTML programmable. Angular and Ember use JavaScript to make HTML itself programmable, so you get custom tags like:

```html
<div *ngIf="selectedHero">

  <h2>{{ selectedHero.name | uppercase }} Details</h2>
  <div><span>id: </span>{{selectedHero.id}}</div>
  <div>
    <label>name:
      <input [(ngModel)]="selectedHero.name" placeholder="name">
    </label>
  </div>

</div>
```

Angular can get confusing, quickly, because it's trying to make HTML into something it isn't.

React, on the other hand, has its own limitations, which we can discuss later, but it works by bringing HTML *into* JavaScript.

React does this by using a language called [JSX](https://reactjs.org/docs/introducing-jsx.html) (**J**ava**S**cript **X**ML). It lets you do things like this:

```javascript
const element = <h1>Hello, world!</h1>;
```

![Mind Blown Reaction GIF](https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif)

So, in [`day02/02-react`](day02/02-react), I rewrote the first example app using React. Let's take a look at the code.

*Mention what's happening on the back-end* (Babel)

## Webpack

*"Any sufficiently advanced technology is indistinguishable from magic."*  
*— Arthur C. Clarke*

Webpack is probably made by a wizard or group of wizards. There are some fairly big names in web development who have gone on record saying they don't understand, completely, how it works.

It's hidden behind a curtain in our previous example, btw. [create-react-app](https://github.com/facebook/create-react-app) (Facebook's official React boilerplate) does a lot of the work for you and hides that it's using Webpack. It does this because Webpack, frankly, is a lot of work to configure. However, and this is why I want to at least look at Webpack a bit, once you have it configured once (or your friendly, neighborhood DHSI instructor has configured it for you 😇), you will never have to configure it again. And, unlike with `create-react-app`, a really evolved Webpack installation (which we will eventually get to), is a lot more powerful out-of-the-box. So, let's take a look at Webpack and [`day02/03-react-webpack`](day02/03-react-webpack).

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

Another way to avoid this issue in Webpack is called [CSS Modules](https://github.com/css-modules/css-modules). With CSS modules, you can write CSS files for your individual React components and import them using a Webpack plugin called `css-loader`. When you import these files, the loader automatically generates a unique name for each style. So, for instance, `.button` might become `.Buttons__button___U2Sdr`, which is not going to conflict with anything. Let's look at how this works in [`day2/04-react-sass-webpack`](day2/04-react-sass-webpack).

### CSS is not a programming language

Ok, so there was some weird looking stuff in those CSS files, huh?

That's because they are written in a language called SASS (**S**yntatically **A**ware **S**tyle**s**heets). SASS is an example of a CSS preprocessor, along with LESS and PostCSS (which we'll talk about later). CSS preprocessors are similar to Babel: they are transpilers that emit CSS. SASS specifically makes CSS into a fully functional programming language with branching and looping control structures and variables.

In sass, you can do things like this:

```css
@function pow($b, $n) {
	@if($n == 0) {
		@return 1;
	}
	$f: $b;
	@while ($n > 1) {
		$f: $f * $b; $n: $n - 1;
	}
	@return $f;
}

@for $i from 0 through 10 {
	.zIndex#{$i} {
		z-index: pow(10, $i);
	}
}
```

and your CSS file would end up as:

```css
.zIndex0 {
  z-index: 1; }

.zIndex1 {
  z-index: 10; }

.zIndex2 {
  z-index: 100; }

.zIndex3 {
  z-index: 1000; }

.zIndex4 {
  z-index: 10000; }

.zIndex5 {
  z-index: 100000; }

.zIndex6 {
  z-index: 1000000; }

.zIndex7 {
  z-index: 10000000; }

.zIndex8 {
  z-index: 100000000; }

.zIndex9 {
  z-index: 1000000000; }

.zIndex10 {
  z-index: 10000000000; }
```

*So, what's going on here?*

Couple notes:

1. SASS has garbage math support (hence `@function pow`).
1. This example is a good instance of a best practice for large CSS projects: don't let people define `z-index` properties on their own, standardize the various levels with classes.

Ok, so that's a very complicated SASS example, let's look again at the simpler code in [`day2/04-react-sass-webpack`](day2/04-react-sass-webpack)

*show how to bundle global.scss into the main app bundle*

To help you learn SASS on its own, I made a boilerplate project for that (I *always* use SASS in projects, so something like this is good for static webpages or things such as developing Wordpress themes with SASS): [https://github.com/oncomouse/node-sass-starter](https://github.com/oncomouse/node-sass-starter).

Go back to your `Projects` directory (`cd ..` if you cloned the course repo correctly), run `git clone https://github.com/oncomouse/node-sass-starter`, and `cd node-sass-starter`. Do you remember how to wipe out git metadata?

(`rm -rf .git`)

As with any Node.js project, run `npm i` to install all the packages the repo uses. Running `npm run start` will start a live-reloading development server on [http://localhost:5000](http://localhost:5000).

Ok, let's look at the code. There's a lot going on here.

*What is going on with that `@import "normalize"` line?*

#### Installing Bootstrap

1. `npm i bootstrap-sass`
1. `@import "bootstrap-sass/assets/stylesheets/bootstrap";` – *Why?*

Full configuration:

`_bootstrap.scss`

~~~css
// This is our custom bootstrap CSS. It loads from the bower version, but only the components we need:

// Core variables and mixins
@import "variables";
@import "bootstrap-sass/assets/stylesheets/bootstrap/mixins";

// Reset and dependencies
@import "bootstrap-sass/assets/stylesheets/bootstrap/normalize";
@import "bootstrap-sass/assets/stylesheets/bootstrap/print";
@import "bootstrap-sass/assets/stylesheets/bootstrap/glyphicons";

// Core CSS
@import "bootstrap-sass/assets/stylesheets/bootstrap/scaffolding";
@import "bootstrap-sass/assets/stylesheets/bootstrap/type";
@import "bootstrap-sass/assets/stylesheets/bootstrap/code";
@import "bootstrap-sass/assets/stylesheets/bootstrap/grid";
@import "bootstrap-sass/assets/stylesheets/bootstrap/tables";
@import "bootstrap-sass/assets/stylesheets/bootstrap/forms";
@import "bootstrap-sass/assets/stylesheets/bootstrap/buttons";

// Components
@import "bootstrap-sass/assets/stylesheets/bootstrap/component-animations";
@import "bootstrap-sass/assets/stylesheets/bootstrap/dropdowns";
@import "bootstrap-sass/assets/stylesheets/bootstrap/button-groups";
@import "bootstrap-sass/assets/stylesheets/bootstrap/input-groups";
@import "bootstrap-sass/assets/stylesheets/bootstrap/navs";
@import "bootstrap-sass/assets/stylesheets/bootstrap/navbar";
@import "bootstrap-sass/assets/stylesheets/bootstrap/breadcrumbs";
@import "bootstrap-sass/assets/stylesheets/bootstrap/pagination";
@import "bootstrap-sass/assets/stylesheets/bootstrap/pager";
@import "bootstrap-sass/assets/stylesheets/bootstrap/labels";
@import "bootstrap-sass/assets/stylesheets/bootstrap/badges";
@import "bootstrap-sass/assets/stylesheets/bootstrap/jumbotron";
@import "bootstrap-sass/assets/stylesheets/bootstrap/thumbnails";
@import "bootstrap-sass/assets/stylesheets/bootstrap/alerts";
@import "bootstrap-sass/assets/stylesheets/bootstrap/progress-bars";
@import "bootstrap-sass/assets/stylesheets/bootstrap/media";
@import "bootstrap-sass/assets/stylesheets/bootstrap/list-group";
@import "bootstrap-sass/assets/stylesheets/bootstrap/panels";
@import "bootstrap-sass/assets/stylesheets/bootstrap/responsive-embed";
@import "bootstrap-sass/assets/stylesheets/bootstrap/wells";
@import "bootstrap-sass/assets/stylesheets/bootstrap/close";

// Components w/ JavaScript
@import "bootstrap-sass/assets/stylesheets/bootstrap/modals";
@import "bootstrap-sass/assets/stylesheets/bootstrap/tooltip";
@import "bootstrap-sass/assets/stylesheets/bootstrap/popovers";
@import "bootstrap-sass/assets/stylesheets/bootstrap/carousel";

// Utility classes
@import "bootstrap-sass/assets/stylesheets/bootstrap/utilities";
@import "bootstrap-sass/assets/stylesheets/bootstrap/responsive-utilities";
~~~

`_variables.scss`

~~~css
// Variables that override bootstrap variables:
$font-size-base: 16px;
$navbar-border-radius: 0;

@import "bootstrap-sass/assets/stylesheets/bootstrap/variables";

// Variables that depend on other bootstrap variables:
$font-family-serif: "Heuristica", $font-family-serif;
~~~