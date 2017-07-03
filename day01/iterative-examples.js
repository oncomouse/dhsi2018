// Functional forEach:
[1,2,3,4,5].forEach(function(currentValue, index) {
	console.log('Value #' + (index + 1) + ' of the array is: ' + currentValue);
});

// Iterative:
var input = [1,2,3,4,5];
for(var i=0; i < input.length; i++) {
	console.log('Value #' + (i + 1) + ' of the array is: ' + input[i]);
}

// Functional map:
console.log(

	[1,2,3,4,5].map(function(currentValue) { 
		return currentValue * currentValue;
	})

)

// Iterative:
var input = [1,2,3,4,5];
var output = [];
for(var i=0; i < input.length; i++) {
	var currentValue = input[i];
	output.push(currentValue * currentValue); // .push() adds a value to the end of an array
}
console.log(output);

// Functional reduce:
console.log(

	[1,2,3,4,5].reduce(function(accumulator, currentValue) { 
		return accumulator + currentValue;
	}, 0)

)

// Iterative:
var input = [1,2,3,4,5];
var accumulator = 0;
for(var i=0; i < input.length; i++) {
	accumulator += input[i];
}
console.log(accumulator);