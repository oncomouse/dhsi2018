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