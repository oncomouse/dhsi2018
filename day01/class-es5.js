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