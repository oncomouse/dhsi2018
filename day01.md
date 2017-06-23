# Day 1: Getting Started

## Installing Node

## Learning NPM

## JavaScript: The Good Stuff

### Basic Data Type: Array

### Basic Data Type: Object

### Everything is a Variable

Everything in JavaScript can be stored in a variable. This makes for some weird looking code, but it is extremely powerful.

```javascript
function hello() {
	return 'Hello World!';
}
```

Is the same as:

```javascript
var hello = function() {
	return 'Hello World!';
}
```

The most important aspect of this is that functions can be stored in variables. And variables can be passed to other functions.

```javascript
var add = function (x,y) {
	return x + y;
}
var sub = function (x,y) {
	return x - y;
}
var times = function (x,y) {
	return x * y;
}
var math = function(op,x,y) {
	return op(x,y);
}

console.log(math(add,1,2));
console.log(math(sub,1,2));
console.log(math(times,1,2));
```

Run `node day01/math.js` to see this in action!

#### Functional Array Manipulation

There is a set of operations that work on Arrays that use function-as-variables extensively. They are also ridiculously cool! The three functions are [`Array.prototype.forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ForEach), [`Array.prototype.map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map), and [`Array.prototype.reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce).

`Array.prototype.forEach` runs a supplied function on each member of an array. The function can accept up to three parameters: `currentValue`, `index`, and `array` (which is the whole array). As an example:

```javascript
[1,2,3,4,5].forEach(function(currentValue, index) {
	console.log('Value #' + (index + 1) + ' of the array is: ' + currentValue);
});
```

This will print:

```
Value #1 of the array is: 1
Value #2 of the array is: 2
Value #3 of the array is: 3
Value #4 of the array is: 4
Value #5 of the array is: 5
```

`Array.prototype.map` runs the supplied function on each member of an array and stores the returned value of the function in a new array at the same place as the passed old value. For instance:

```javascript
[1,2,3,4,5].map(function(currentValue) { 
	return currentValue * currentValue;
})
```

This will return the new array `[1,4,9,16,25]`. Why?

Also, why is it important that I keep emphasizing this is a *new* array?

`Array.prototype.reduce` takes two parameters: a function and an initial value. The function can take up to four parameters `accumulator`, `currentValue`, `index`, and `array`. `accumulator` is first set to the initial value but then will be set to the output of the function. The final value of `accumulator` is returned by `Array.prototype.reduce`. For instance:

```javascript
[1,2,3,4,5].reduce(function(accumulator, currentValue) { 
	return accumulator + currentValue;
}, 0)
```

This will return `15`. Why?

These three methods (`forEach`, `map`, and `reduce`) are currently trendy in JavaScript, partly because JavaScript is going through a functional programming moment, but also because these methods are significantly clearer than their iterative equivalent.

You can see what I mean by looking at `day01/iterative-examples.js` which contains iterative versions of our functional examples.

### Closures

In JavaScript, anything contained in `{` and `}` is called a *closure*. Closures are complete data worlds. Anything variable is *declared* inside a closure will exist inside that closure for as long as that closure exists.

Closures can be nested. Any closure that is inside of another closure (ie. a *child* inside a *parent*) will have access within the child closure to the life of the parent closure.

Consider the following code:

```javascript
function makeSayHello(name) {
	name = name || 'Default Name'; // Default parameter
	return function() {
		return 'Hello, ' + name;
	}
}

var helloAnna = makeSayHello('Anna');
var helloRose = makeSayHello('Rose')

console.log(helloAnna());
console.log(helloRose());
console.log(makeSayHello('Jane')); // Is this right?
console.log(makeSayHello('Jane')()); // Why do we need this?
```

Run `node day01/hello.js` to see this run!

### Prototypes

JavaScript is intended as a multiple-paradigm programming language. You can use it to do [iterative programming](https://en.wikipedia.org/wiki/Iteration) (as our examples above have been). You can use it do to [functional programming](https://en.wikipedia.org/wiki/Functional_programming) (we'll be talking more about this when we get to React). 

### `this`

## ES2015: The Future is Now

### Babel: Use the Future Today

### Big Changes

Consider this example:

```javascript
var helloWorld = function(name) {
	name = name || 'person';
	return 'Hello, ' + name + '!';
}
```

In ES2015, this can be rewritten as:

```javascript
const helloWorld = (name='person') => `Hello, ${name}!`;
```

What changes?

1. **`const`** designates variables that cannot be reassigned after they change (this is not the same as meaning they cannot change).
1. **Arrow function** syntax is a concise (and more functional) way of designating a function. The general syntax is 
	```javascript
	(param1, param2, etc.) => {
		<function body>
	}
	```
	* If the function is only one line, the result of the line is returned. A simple example:
		```javascript
		const addThreeNumbers = (p1,p2,p3) => p1 + p2 + p3;
		```
	* Otherwise, JS closure syntax is used (`{`, `}`, and `return`). Example:
		```javascript
		const fib = n => {
			let a = 0, b = 1, f = 1;
			for(let i = 2; i <= n; i++) {
				f = a + b;
				a = b;
				b = f;
			}
			return f;
		}
		```
1. **Default parameters**: you can now set a default parameter value in the function body by assigning a value (`name='person'` above). This works in old style functions, too:
	* The following is valid ES6:
		```javascript
		function foo(bar='baz') {
			return 'foo ' + bar;
		}
		```
1. **Template strings** substitute any value wrapped in `${}` for the expression in the context of the closure. This can be a more detailed expression or it can be a variable. Also not the use of \` instead of ' as the character.

Most of these changes are cosmetic and designed to make the language easier to use. They also exist to more strongly emphasize JavaScript's functional nature.

### Classes

We talked about JavaScript's prototype-based object-oriented approach (and why it's so cool), but ES2015 introduces the more commonly used (in terms of other programming languages) class-based approach to object-oriented programming.

Where, in JavaScript, a type of data structure, such as Array, is defined as a prototype object that is cloned with each new array created (such that editing `Array.prototype` changes all arrays that exist in our program), a class defines how an object operates but is not itself an object. This matters a lot for computer scientists, but for our purposes, it's worth mentioning because [React](https://facebook.github.io/react/) uses classes.

Here's a class:

```javascript
class Player {
	static defaultParams = {
		name: 'Foo Bar',
		class: 'Wizard'
	}
	static classes = [
		'Barbarian',
		'Bard',
		'Cleric',
		'Druid',
		'Fighter',
		'Mage',
		'Wizard',
		'Monk',
		'Mystic',
		'Paladin',
		'Ranger',
		'Sorcerer',
		'Thief',
		'Rogue',
		'Warlock'
	];
	static validClass(charClass) {
		return this.classes.includes(charClass);
	}
	constructor(params) {
		this.params = Object.assign({}, this.constructor.defaultParams,  params);
		if(!this.constructor.validClass(this.params.class)) {
			this.params.class = this.constructor.defaultParams.class;
		}
	}
	sayHello() {
		return `Hello, my name is ${this.params.name}. I'm a ${this.params.class}!`;
	}
}
```

We can create players and interact with them:

```javascript
let p1 = new Player({
	name: 'Diana',
	class: 'Rogue'
});
let p2 = new Player({
	name: 'Andrew',
	class: 'Digital Humanist'
});
console.log(p1.sayHello());
console.log(p2.sayHello());
```

What will this produce? Run `babel-node day01/class.js` to find out.

#### A Note About Sugar

Of course, we can implement our `Player` class in ES5 just fine as a prototype to be cloned:

```javascript
var Player = function(params) {
	this.params = Object.assign({}, this.constructor.defaultParams, params);
	if(!this.constructor.validClass(this.params.class)) {
		this.params.class = this.constructor.defaultParams.class;
	}
}
Player.defaultParams = {
	name: 'Foo Bar',
	class: 'Wizard'
}
Player.classes = [
	'Barbarian',
	'Bard',
	'Cleric',
	'Druid',
	'Fighter',
	'Mage',
	'Wizard',
	'Monk',
	'Mystic',
	'Paladin',
	'Ranger',
	'Sorcerer',
	'Thief',
	'Rogue',
	'Warlock'
];
Player.validClass = function(charClass) {
	return this.classes.includes(charClass);
}
Player.prototype.sayHello = function() {
	return `Hello, my name is ${this.params.name}. I'm a ${this.params.class}!`;
}
```

Run `node day01/class-es5.js` (OR `babel-node day01/class-es5.js`).

The *main* reason for ES6 classes is because they are slightly simpler to write. This is called *syntactical sugar*. Most of the new JavaScript is sugar.

However, as we will talk about later in the course, classes set up inheritance, which is important to React. But that's for later.