var fs = require('fs');

fs.readFile(__dirname + '/cv.json', function(err,data){
	data = JSON.parse(data);
	console.log('My name is ' + data.name + '.');
	console.log(' I currently work at ' + data.currentEmployment.institution + ' as a ' + data.currentEmployment.title + ' and have since ' + data.currentEmployment.startYear + '.');
	console.log('I have had ' + data.previousEmployment.length + ' previous academic jobs.');
	
	data.previousEmployment.push({
		institution: 'Pennsylvania State University',
		title: 'Graduate Student',
		startYear: 2005,
		endYear: 2011
	});
	data = JSON.stringify(data,null,2); // ,null,2 causes JSON to format in a human-readable way (that takes up more space and shouldn't be used unless people are actually reading this JSON).
	fs.writeFile(__dirname + '/cv.json', data, function(err,data) {});
})