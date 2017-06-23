var Record = function(firstName, lastName, occupation) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.occupation = occupation;
}

var myRecord = new Record('Samantha', 'Bright', 'Programmer');

Record.prototype.introduction = function() {
	return 'My name is ' + this.firstName + ' ' + this.lastName + '. I work as a ' + this.occupation + '.';
}

console.log(myRecord.introduction());