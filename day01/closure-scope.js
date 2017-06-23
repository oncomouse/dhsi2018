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