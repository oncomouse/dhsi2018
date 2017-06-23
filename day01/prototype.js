Array.prototype.add1 = function() {
	for(var i = 0; i < this.length; i++) {
		this[i] += 1;
	}
}

var testArray = [1,2,3,4,5];
testArray.add1();
console.log(testArray);