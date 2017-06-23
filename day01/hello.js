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