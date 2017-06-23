# Day 1: Getting Started

## Installing Node

## Learning NPM

## JavaScript: The Good Stuff

### Closures

### Prototypes

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
	name: 'Jim',
	class: 'Thief'
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

The *main* reason for ES6 classes is because they are slightly simpler to write.

However, as we will talk about later in the course, classes set up inheritance, which is important to React. But that's for later.