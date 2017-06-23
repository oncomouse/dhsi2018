// The first two lines are how you read from a file in Node. All you need to know is that fileContents contains the JSON string stored in cv.json:
var fs = require('fs');
fs.readFile(__dirname + '/cv.json', function(err,fileContents) {

	// Convert the JSON string into program data:
	var data = JSON.parse(fileContents);
	
	// Access the data:
	console.log('My name is ' + data.name + '.');
	console.log(' I currently work at ' + data.currentEmployment.institution + ' as a ' + data.currentEmployment.title + ' and have since ' + data.currentEmployment.startYear + '.');
	console.log('I have had ' + data.previousEmployment.length + ' previous academic jobs.');
	
	// Change the data:
	data.previousEmployment.push({
		institution: 'Pennsylvania State University',
		title: 'Graduate Student',
		startYear: 2005,
		endYear: 2011
	});
	
	// Serialize the updated data to a JSON string again:
	fileContents = JSON.stringify(data,null,2); // ,null,2 causes JSON to format in a human-readable way (that takes up more space and shouldn't be used unless people are actually reading this JSON).
	
	// Write it back to the disk using Node:
	fs.writeFile(__dirname + '/cv.json', fileContents, function(err,data) {});
})