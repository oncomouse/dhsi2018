# Day 1: Getting Started

## Installing Node

## Learning NPM

## JavaScript: The Good Stuff

## ES2015: The Future is Now

### Big Changes

Consider this example:

~~~javascript
var helloWorld = function(name) {
	name = name || 'person';
	return 'Hello, ' + name + '!';
}
~~~

In ES2015, this can be rewritten as:

~~~javascript
const helloWorld = (name='person') => `Hello, ${name}!`;
~~~

What changes?

1. **`const`** designates variables that cannot be reassigned after they change (this is not the same as meaning they cannot change).
1. **Arrow function** syntax is a concise (and more functional) way of designating a function. The general syntax is `(param1, param2, etc.) => <function body>`.
	* If the function is only one line, the result of the line is returned.
	* Otherwise, JS closure syntax is used (`{`, `}`, and `return`).
1. **Default parameters**: you can now set a default parameter value in the function body by assigning a value (`name='person'` above). This works in old style functions, too:
	* `function foo(bar='baz') { return 'foo ' + bar; }` is valid in ES2015
1. **Template strings** substitute any value wrapped in `${}` for the expression in the context of the closure. This can be a more detailed expression or it can be a variable. Also not the use of \` instead of ' as the character.

Most of these changes are cosmetic and designed to make the language easier to use. They also exist to more strongly emphasize JavaScript's functional nature.

### Babel: Use the Future Today