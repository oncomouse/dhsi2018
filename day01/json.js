var fs = require('fs');

fs.readFile(__dirname + '/cv.json', function(err,data){
	data = JSON.parse(data);
	console.log('My name is ' + data.name + '.');
	console.log(' I currently work at ' + data.currentEmployment.institution + ' as a ' + data.currentEmployment.title + ' and have since ' + data.currentEmployment.startYear + '.');
	console.log('I have had ' + data.previousEmployment.length + ' previous academic jobs.');
	
	data.previousEmployment.push({
		institution: 'Pennsylvania State University',
		title: 'Fixed-Term Lecturer',
		startYear: 2005,
		endYear: 2011
	});
	fs.writeFile(__dirname + '/cv.json', JSON.stringify(data));
})