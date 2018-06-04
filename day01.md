# Day 1: Getting Started

## Agenda

1. [First Steps](#first-steps)
1. [Installing Node](#installing-node)
1. [Installing Atom](#installing-atom)
1. [Configuring Atom](#configuring-atom)
1. [Learning NPM](#learning-npm)
1. [JavaScript: The Good Stuff](#javascript-the-good-stuff)
1. [ES2015: The Future is Now](#es2015-the-future-is-now)


## First Steps

There are a few things you should familiarize yourself with before the first day of class. I've divided it into macOS and Windows, as the requirements are different.

### macOS

**The Command Line** – We will be using a lot of command line software in this class. Hopefully, you are familiar with the basics of working with the UNIX command line. If you are not, Tracy Osborn [has a fun and quick introduction](https://drive.google.com/file/d/1_2LTtR6f5bFCC5wjFZc9ILA7vmru7ShK/view) that can get you up to speed!

**Home Brew** – Installing command line tools on macOS can be a bit of a challenge, but thankfully, [Home Brew](https://brew.sh/) is a simple to understand and easy to use package manager for command line software on your Mac. I am going to assume you're using Home Brew on your Mac for this course, so make sure to be familiar with it. To install, copy the following command and paste it into your terminal: `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`. It will talk you through the rest.

### Windows

**Command Line** – The Windows command line is different than UNIX. We will be using Windows lab machines in this class and if you use Windows for work, you may want to familiarize yourself with it. [This is a basic tutorial that is focused on Java development using the less powerful command line (cmd)](https://www.cs.princeton.edu/courses/archive/spr05/cos126/cmd-prompt.html), but helpful nonetheless for learning basics of command line on Windows.

**Powershell** – PowerShell is the more powerful command line interface that many developers prefer. It is significantly more powerful than the older cmd.exe program, though a bit finicky. Scoop (see below) uses Powershell, so I'll encourage you to use it too. Here is Microsoft's ["Getting Started"](https://docs.microsoft.com/en-us/powershell/scripting/getting-started/getting-started-with-windows-powershell?view=powershell-6) article. [This blog post](https://dev.to/itsjzt/what-can-you-do-with-powershell-for-developers--edh) offers some tips on customizing PowerShell.

**Scoop** – Scoop is a package manager for Windows that works similar to Homebrew and looks pretty awesome. I want to use this in our course, but I'll level with you: I don't know enough about Windows to know if it will work on the lab machines, though the people who write Scoop insist that it will.

Anyway, to install Scoop, run the following in Powershell (<kbd>Win+R</kbd>, type "powershell", and press <kbd>Enter</kbd>): `iex (new-object net.webclient).downloadstring('https://get.scoop.sh')` (you may also need to run `Set-ExecutionPolicy RemoteSigned -scope CurrentUser` to set permissions).

*Note:* I don't know much about Scoop, but it seems really cool. I hope we can use it on the lab computers in Victoria!

## Installing Node

Node.js is a hugely important advance in the development of JavaScript as a serious language for building software. We will talk more about why that is tomorrow, but for now, know that Node is a JavaScript interpreter (like the one in your web browser) that runs on the command line. We will be using Node throughout the class to manage our software and to assemble some of the more complex projects we will be working with later in the class.

For today, after we walk through installing Node, we will be using Node because it is an easier way to focus on learning JavaScript than working with the browser.

### OSX

Run `brew install node` to install Node.

### Windows

If you installed Scoop, you can run `scoop install nodejs` to get the newest version.

If you are an administrator on your machine, you can install Node as you would install any other software. [Click here](https://nodejs.org/en/download/current/) and download the "Windows Installer". Running it is straight-forward.

After you install, run the following from Powershell (<kbd>Win+R</kbd>, type "powershell", and press <kbd>Enter</kbd>): `$env:path += ";$env:appdata\npm"` and then run `[Environment]::SetEnvironmentVariable("Path", $env:Path)`. This will add any tools we install globally with npm to your execution path.

## Installing Atom

### macOS

Download the installer from [https://atom.io](https://atom.io). Unzip the archive and drag Atom.app to your Applications folder. You can run it as you would any other program from that point (click "Yes" if it asks you to trust it).

### Windows

Download the binary install from [https://atom.io](https://atom.io). When the installer finishes, run it and it will install Atom on your computer. *Note*: Atom installs locally, so if you configure it the way you want on one of our lab computers, you need to keep using that computer during the week.

After running it, open Powershell (<kbd>Win+R</kbd>, type "powershell", and press <kbd>Enter</kbd>). Copy the following command and paste it into the shell (you paste into Command Line by right clicking): `$env:path += ";$env:localappdata\atom\bin"`. This will add the commands `apm` (for install Atom packages) and `atom` (for launching the editor from the command line) to your path. After testing that those commands work, run `[Environment]::SetEnvironmentVariable("Path", $env:Path)` to finalize your changes for future sessions.

## Configuring Atom

Atom is an extremely modular, customizable editor. You can change its appearance and its functionality by browsing and installing community maintained themes and packages.

### Choosing a Theme

Hitting <kbd>Control+Shift+P</kbd> on Windows or <kbd>⌘+Shift+P</kbd> on Mac will bring up the command bar in Atom. You can search for command by typing their name. For now, type "theme", scroll down until you see "Settings View: View Installed Themes", and press <kbd>Enter</kbd>.

This brings up the theme selection window. You can choose a syntax theme and a UI theme (one controls the code, the other all the other elements). I use **Solarized Light** for syntax and have installed **Solarized Light UI** for UI. To install the theme, click "+ Install" in the Settings tab that opened when we launched the theme viewer. Select "Themes" next to the search bar, type "solarized-light-ui" in the search bar, and press <kbd>Enter</kbd>. Find "solarized-light-ui" and click the "Install" button in that result. "Solarized Light" will now be available in the UI selection widget in the **Theme** section of the Settings tab.

If you want to explore themes, you can search for theme at: [https://atom.io/themes/](https://atom.io/themes/).

In the next section, we'll also learn how to install Atom packages more easily.

### Installing Packages

Copy the following command into your command line and run it: `apm install Sublime-Style-Column-Selection autoclose-html autocomplete-modules color-picker editorconfig emmet emmet-jsx-props es6-javascript file-icons highlight-selected language-babel language-ejs multi-cursor-plus pigments script smart-tab-name`. This will install all the plugins you need to work with JavaScript, CSS, and SASS in Atom.

`apm` is **A**tom **P**ackage **M**anager and it is the faster way to install any packages and/or themes into Atom. Packages are enabled by default, when installed.

You can browse for more packages at: [https://atom.io/packages](https://atom.io/packages).

*Also of note*: I use [Fira Code](https://github.com/tonsky/FiraCode), a really neat font with programming ligatures. If you know how to install fonts on your system, you might consider installing it as well, though that is totally optional.

### What Else Can I Do With Atom?

If you want to take the plunge into writing academic books and articles with Pandoc Markdown (which you should, because it's awesome), Atom can be configured into an extremely powerful Markdown editor. Check out Scott Selisker's post on the topic, ["A Plain Text Workflow for Academic Writing with Atom"](http://u.arizona.edu/~selisker/post/workflow/) for more information.

## (Optional) Installing Git

### OSX

Git is included with macOS but it is usually out-of-date. To install a fresh (and updatable) copy, run `brew install git`.

### Windows

If you are using Scoop, run `scoop install git`.

Download the binary installer from [https://git-scm.com/download/win](https://git-scm.com/download/win). The install has a lot of options, but the defaults will generally be ok.

After running it, open the Powershell (Win+R and type "powershell"). Copy the following command and paste it into the shell (you paste into Command Line by right clicking): `$env:path += ";$env:localappdata\Programs\Git\bin"`. This will add the command `git` to your path. After testing that git (type `git --version` into the command line and hit <kbd>Enter</kbd>) runs, run `[Environment]::SetEnvironmentVariable("Path", $env:Path)` to finalize your changes for future sessions.

## Learning NPM

One major feature of Node.js is NPM (which is an independent repository not officially run by the Node.js team). NPM ("Node Package Manager") makes it easier to install a variety of software packages for Node.

The version of this course contains a rudimentary NPM environment ([`package.json`](package.json)). Let's look at it now.

To get started working with course content, we need to clone a copy of the repository to our local machine (Git works by allowing local changes that you then "push" back to the remote origin repository). First, we need to create a `Projects` directory. All GitHub projects are, by convention, stored in the projects directory. To get back to your home directory from the terminal, type `cd`. Then type `mkdir Projects`. Then `cd Projects`. We are now in our new git repo directory.

In your terminal, run `git clone https://github.com/oncomouse/dhsi2018`. If you didn't install Git earlier, visit [https://github.com/oncomouse/dhsi2018](https://github.com/oncomouse/dhsi2018) and click the green "Clone Or Download" button and click the "Download ZIP" link in the pop-up. Move that .zip file into Projects and extract it. On macOS, you can extract it by running `unzip dhsi2018-master.zip`. On Windows, and if you are using Scoop, you can run `scoop install unzip` followed by `unzip dhsi2018-master.zip` (otherwise, [click here for instructions](https://support.microsoft.com/en-us/help/4028088/windows-zip-and-unzip-files)).

Now run `cd dhsi2018` to enter the repository.

As a first step when cloning someone else's repository, it's good to remove the git metadata, so we don't accidentally mess with their master repo. In macOS, run `rm -rf .git` (& don't leave anything off, rm -rf is a dangerous command!). In Windows, run `rm .\.git -r -fo`.

### Ok, let's finally do some JavaScript!

That was a lot of stuff! Good for you getting everything set up! The nice thing about all of this is, unless you accidentally drop your laptop in a fountain, you'll never have to do any of that again. The magic of all of this stuff is the logic of DRY ("**D**on't **R**epeat **Y**ourself"), which underscores the lazy-web-developer ethos we are cultivating in this course. Struggle once, breeze through life forever after!

Anyway, the first thing we should learn about NPM is using it to install packages. Our DHSI repository is a Node.js project with dependencies and everything. To get started with the basic packages, run `npm install` in your terminal now.

You just installed the packages required to run the examples for today (other days will have their own NPM environments, when we get to more complex software).

If you ever want to install a package in your project, you can run `npm install <package-name>`. Packages can be searched at [NPM's website](https://www.npmjs.com/).

## JavaScript: The Good Stuff

### Basic Data Type: Array

An array is a sequential, number-indexed data structure. It's essentially an ordered list of data. Arrays are written in JavaScript surrounded by square brackets (`[` and `]`), with the values in the array separated by commas. So:

```javascript
var myNumberArray = [1,2,3,4];
var myStringArray = ['a','b','c','d'];
var myMixedArray = [1,true,12.3,'b'];
```

Arrays can be accessed by following their variable name with the index of the element you want to access (arrays indices start with 0). So:

```javascript
myNumberArray[2] === 3; // true
myStringArray[0] === 'a'; // true
myMixedArray[3] === 'b'; // true
```

Arrays can be looped using a `for` loop:

```javascript
for(var i=0; i < myNumberArray.length; i++) {
	console.log(myNumberArray[i]);
}
```

However, there is a move afoot in JavaScript to stop writing `for`, `while` and other iterative looping structures ([we will talk about why and what is replacing them in a bit](#functional-array-manipulation)).

Check out the [Mozilla Developer Network to learn more about all the methods you can use on `Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Basic Data Type: Object

Objects are the other foundational data structure in JavaScript. Where an array is indexed by a sequential number, objects are indexed by either a number or a string. As such, they can be considered as a collection of key/value pairs.

Objects are declared by surrounded curly braces (`{` and `}`), with key/value pairs written indicated in the form `<key>:<value>` and each pair separated by a comma. So:

```javascript
var myObject = {
	foo: 'bar',
	bar: 'baz',
	baz: 1,
	biz: { // You can nest objects!
		my: 1,
		name: 2,
		is: 3,
		object: 4
	},
	array: [1,2,3,4] // You can also store arrays!
}
```

An object can be accessed in two ways: in the form `<variable>.<key>` or `<variable>[<key>]`. Here's an example to clarify from the above:

```javascript
myObject.foo === 'bar'; // true
myObject['bar'] === 'baz'; // true
myObject.baz === myObject['baz']; // true
```

Why do we need both forms? When would we use the more complicated one with brackets?

Check out the [Mozilla Developer Network to learn more about all the methods you can use on `Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

### Warning: Pass By Reference!!!

Both arrays and objects in JavaScript are passed by reference. What this means is that if you pass an object or an array to a function, the function does not get a new copy of the data in the structure. Instead, it gets a reference to the *same data* as you passed.

In practice, this means that if a function changes an array or an object, the object outside the scope of the function will also change. This behavior is fine *as long as you plan for it*. Make sure you know, when using a library such as [Ramda](http://ramdajs.com/) or [Lodash](https://lodash.com/) that provide array and object manipulation functions, whether the functions change their parameters or return copies.

As an example of what I mean, consider:

```
function change(array, value) {
	array.push(value)
}

var me = ['a','b','c'];
change(me, 'd');
console.log(me);
```

What do you expect to be the output?

Consider this example:

```
function iWillNotChange(array, value) {
	var localCopy = array.slice();
	localCopy.push(value);
	return localCopy
}
var me = ['a','b','c'];
var newMe = iWillNotChange(me, 'd');
console.log(me, newMe);
```

What happened here?

Same effect with objects:

```javascript
function addBlast(object,value) {
	var localCopy = Object.assign({},object);
	localCopy.blast = value;
	return localCopy;
}
var me = {foo: 'bar'};
var newMe = addBlast(me, 'baz');
console.log(me, newMe);
```

So, to copy an array use [`Array.prototype.slice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Slice) with no arguments (`slice` is awesome, read up on it!). To copy an object use [`Object.assign`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) with `{}` as the first parameter.

### JSON

JSON is "JavaScript Object Notation" and it is an object serialization format based on the standard way of defining objects and arrays in JavaScript. Serialization is the process of taking a piece of data that is in memory, converting it to a string, and sending it by different means. It can be used to communicate between computers or between a human and a computer (as you install packages using NPM, NPM is modifying package.json, which is a serialized representation of NPM's understanding of your project).

JSON is a *very* simple way to represent complex data and can be extremely readable by humans as well as machines.

There are a few differences between JSON and JavaScript (because JSON is slightly stricter than JavaScript). Here is an example JSON file:

```json
{
	"name": "Andrew Pilsch",
	"currentEmployment": {
		"title": "Assistant Professor of English",
		"institution": "Texas A&M University",
		"startYear": 2015
	},
	"previousEmployment": [
		{
			"institution": "Arizona State University",
			"title": "Assistant Professor of English & Technical Communication",
			"startYear": 2012,
			"endYear": 2015
		},
		{
			"institution": "Pennsylvania State University",
			"title": "Fixed-Term Lecturer",
			"startYear": 2011,
			"endYear": 2012
		}
	]
}
```

To load a serialized JSON object (which is a string) as JavaScript data we can manipulate, we could run `var data = JSON.parse(JSONstring)`. To serialize JavaScript data as a JSON string, run `var JSONstring = JSON.stringify(data)` (why `stringify`? I have no idea).

Take a look at [`day01/json.js`](day01/json.js) and then run `node day01/json.js` to see this in action (this uses Node's filesystem methods, so it will look a little unfamiliar). Also, after you run the program, take a look at your local copy of `day01/cv.json`. It will have changed.

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

Once a function is stored in a variable, it can be passed as a parameter to other functions:

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

Run [`node day01/math.js`](day01/math.js) to see this in action!

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

You can see what I mean by looking at [`day01/iterative-examples.js`](day01/iterative-examples.js) which contains iterative versions of our functional examples.

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

Run [`node day01/hello.js`](day01/hello.js) to see this run!

#### `var` and scope (or why JavaScript will make you pull your hair out)

Closures are useful for trapping particular variables inside a particular scope, but to do so, the variable has to be declared. This is why the `var` keyword is *so* important to JavaScript. Writing `var` before a variable declares it as unique to that scope (ie. it won't be inherited from a broader scope). A lot of time, this is done to prevent polluting the global scope, as JavaScript programmers call it.

Consider this example:

```javascript
function foo1() {
	var foobar = 'Bar';
	foobar += 'Baz';
	console.log(foobar);
}
function foo2() {
	foobar += 'Baz';
	console.log(foobar);
}

var foobar = 'Foo';
foo1();
console.log(foobar);
foo2();
console.log(foobar);
```

What is the output? See it by running [`node day01/closure-scope.js`](day01/closure-scope.js).

Why is the output like that?

### Prototypes

JavaScript is intended as a multiple-paradigm programming language. You can use it to do [iterative programming](https://en.wikipedia.org/wiki/Iteration) (as our examples above have been). You can use it do to [functional programming](https://en.wikipedia.org/wiki/Functional_programming) (we saw some of this we the three array methods, but we'll be talking more about this when we get to Redux).

You can also use it as an [object-oriented language](https://en.wikipedia.org/wiki/Object-oriented_programming). OOP was a big deal in computer science and software engineering in the 1990s and early 2000s (its fading a bit because it was not implemented well). Perhaps you read [Alexander Galloway's misguided essay in Critical Inquiry about OOP](http://cultureandcommunication.org/galloway/pdf/Galloway,%20Poverty%20of%20Philosophy.pdf)?

Anyway, because JavaScript is quirky, of course it's OOP implementation is different from how most languages do it (this will become a refrain for this course). We'll talk about how other languages due OOP in a minute, but JavaScript uses what's called "*prototypal inheritance*."

In this model of OOP individual objects are derived by cloning prototypal objects that *are themselves objects*. So, for instance, when you create a new array in Javascript (`var m = [];`), you are actually cloning the `Array` object. What cloning does is copy all the properties of the prototype to the new clone.

Why this matters is that later, you can edit the prototypal object's prototype property and *change all of its clones*. For instance, you could add a method to Array that added one to each value of the array:

```javascript
Array.prototype.add1 = function() {
	for(var i = 0; i < this.length; i++) {
		this[i] += 1;
	}
}

var testArray = [1,2,3,4,5];
testArray.add1();
console.log(testArray);
```

What does `this` mean here? What do you think?

`this` is a magic word in JavaScript. In the context of JavaScript's object-oriented prototype model, `this` is the current object being manipulated. Every function has a `this`, which is usually `undefined`, except in the case of objects. You can also use a special function `.bind()` (which is part of function's prototype (because everything is data in JavaScript)) to set `this` for a function that normally would not have `this` set (this will matter *a lot* when we get to React).

Being able to extend `prototype` is useful for a variety of reasons, but one that is especially useful is polyfilling: the practice of implementing new member functions for older versions of JavaScript. For instance, `forEach` was added to Arrary's `prototype` in browser implementing JavaScript version 5. To add it to older browsers, you could add [this code from Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ForEach#Polyfill):

```javascript
// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
if (!Array.prototype.forEach) {

  Array.prototype.forEach = function(callback/*, thisArg*/) {

    var T, k;

    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    // 1. Let O be the result of calling toObject() passing the
    // |this| value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get() internal
    // method of O with the argument "length".
    // 3. Let len be toUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If isCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let
    // T be undefined.
    if (arguments.length > 1) {
      T = arguments[1];
    }

    // 6. Let k be 0.
    k = 0;

    // 7. Repeat while k < len.
    while (k < len) {

      var kValue;

      // a. Let Pk be ToString(k).
      //    This is implicit for LHS operands of the in operator.
      // b. Let kPresent be the result of calling the HasProperty
      //    internal method of O with argument Pk.
      //    This step can be combined with c.
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal
        // method of O with argument Pk.
        kValue = O[k];

        // ii. Call the Call internal method of callback with T as
        // the this value and argument list containing kValue, k, and O.
        callback.call(T, kValue, k, O);
      }
      // d. Increase k by 1.
      k++;
    }
    // 8. return undefined.
  };
}
```

#### Implementing Custom Objects

To implement a custom object using JavaScript, you define a function and store it in a variable:

```javascript
var Record = function(firstName, lastName, occupation) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.occupation = occupation;
}
```

Whenever `Record` is invoked with the special keyword `new`, we save the three parameters to `this` so that they can be accessed later. Our function `Record` is called a *constructor* and it is building an object that could be annotated in JSON as:

```json
{
	"firstName": "First",
	"lastName": "Last",
	"occupation": "Occupation"
}
```

If we ran: `new Record('First', 'Last', 'Occupation')`.

We would do create a more interesting record by running `var myRecord = new Record('Samantha', 'Bright', 'Programmer');`.

If we want to make `Record` and (any Records we create) do something, we have to modify it's prototype:

```
Record.prototype.introduction = function() {
	return 'My name is ' + this.firstName + ' ' + this.lastName + '. I work as a ' + this.occupation + '.';
}
```

We can now call `myRecord.introduction()` to get `My name is Samantha Bright. I work as a Programmer.` returned for us.

We could continue adding methods to `Record`'s `prototype` to build out our custom object, but we won't.

The code for this example is [`day01/new-prototype-object.js`].

## ES2015: The Future is Now

### Babel: Use the Future Today

Though ES2015 is not completely implemented in web browsers, you can still write code using the new features of this language, thanks to a project called [Babel](https://babeljs.io/). Babel is a "transpiler" (portmanteau of "translating compiler") that translates ES2015 into ES5 code that runs in the modern browser. If you want to read an academic article about this stuff, I have an article in *Amodern* about Babel and ES2015 transpilation.

If you ran `npm install` back at the beginning of today, you already have a working Babel environment in this repository. Take a look at [`.babelrc`](.babelrc).

However, to run the Babel examples in this section, you will need a special version of Node (called "babel-node") to run them. To install this command on your system, run `npm install -g babel-cli` in your command line. The `-g` switch to `npm install` says to install the library globally. This makes any binaries the library installs (in this case `babel-node`) available in the global $PATH for your shell, so you can run them from the command line.

*Note*: because Node is a *rapidly* changing landscape, I have to mention a new way to do this: in a recent upgrade, they added the command `npx` (which stands for **N**ode **P**acakge E**x**ecute). `npx` lets you run any binary command from a Node.js package whether it is installed or not (it will install if it isn't), so you could also just run `npx babel-node` to execute `babel-node`, but this will also work for *any* Node.js package that installs a binary.

(If you don't use the `-g` flag, these binaries are all installed in `node_modules/.bin`, but we'll get to that in a few days).

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
	* *This is really important*: the following code is valid in ES2015:
		```javascript
		const arr = [1,2,3,4,5];
		arr.push(6);
		console.log(arr); // Will print [1,2,3,4,5,6]
		```
		But this is not:
		```javascript
		const arr = [1,2,3,4,5];
		arr = [1,2,3,4,5,6];
		```
		Why?
		In future JavaScript implementations, `const` will be a more efficient variable form (but this isn't implemented yet).
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
	* To return an object from a one-liner, place the single line in parenthesis:
		```javascript
		const makeObject = (key,value) => ({[key]: value});
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
	The other important thing about arrow functions is that `this` is always set to the scope equivalent of `this` (so `()=>{}` is equivalent to `function(){}.bind(this)`)
1. **Default parameters**: you can now set a default parameter value in the function body by assigning a value (`name='person'` above). This works in old style functions, too:
	* The following is valid in ES2015:
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

What will this produce? Run [`babel-node day01/class.js`](day01/class.js) to find out.

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

Run [`node day01/class-es5.js`](day01/class-es5.js) (OR [`babel-node day01/class-es5.js`](day01/class-es5.js)).

The *main* reason for ES6 classes is because they are slightly simpler to write. This is called *syntactical sugar*. Most of the new JavaScript is sugar.

However, as we will talk about later in the course, classes set up inheritance, which is important to React. But that's for later.

# Have a Great Evening!
