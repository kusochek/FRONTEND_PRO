class Plane {
	constructor(name, maxCrosswind) {
		this.name = name;
		this.maxCrosswind = maxCrosswind;
	}

	takeoff(params) {
		return `Takeoff for ${this.name} is ${this.makeFlightData(params).every(function(el) { return el }) ? "approved" : "not approved"}.`
	}

	makeFlightData(params) {
		return [this.getCrosswindApprove(params.crosswind)]
	}

	getCrosswindApprove(crosswind) {
		return crosswind < this.maxCrosswind ? true : false;
	}
}

class Airlainer extends Plane {
	constructor(name, maxCrosswind, minPassanger) {
		super(name, maxCrosswind);
		this.minPassanger = minPassanger;
	}

	getPasApproval(params) {
		return this.minPassanger > params.minPas ? true : false;
	}

	makeFlightData(params) {
		return [...super.makeFlightData(params), this.getPasApproval(params)]
	}
}

class Aerobatics extends Plane {
	constructor(name, maxCrosswind,) {
		super(name, maxCrosswind);
	}
}

let Boeing747 = new Airlainer('Boeing747', 20, 999);
let Extra330 = new Aerobatics('Extra330', 12);

console.log(Boeing747.takeoff({crosswind: CROSSWIND, minPas: 100}));
console.log(Extra330.takeoff({crosswind: CROSSWIND}));



const OPERATIONS = {
	'+': function(x,y){ return x+y },
	'-': function(x,y){ return x-y },
	'/': function(x,y){ return x/y }
}

class SuperMath{

	constructor() {
		this.input();
	}

	check() {
		let userApproved = confirm(`Do you want make operation ${this.x} ${this.znak} ${this.y}?`);

		return userApproved ? OPERATIONS[this.znak](this.x, this.y) : this.input().check();
	}

	input() {
		do{
			this.x = prompt(`Enter x`);
		} while(isNaN(this.x));

		do{
			this.y = prompt(`Enter y`);
		} while(isNaN(this.y));

		do{
			this.znak = prompt(`Enter znak: ${this.getOperations()}`);
		} while(!OPERATIONS[this.znak]);

		return this;
	}

	getOperations() {
		let opers = [];
		for(let key in OPERATIONS){
			opers.push(key);
		}

		return opers.join(`, `);
	}
}


let mySuperMath = new SuperMath();

console.log(mySuperMath.check());



// let user = {
// 	name: 'Alens',
// 	getName() {
// 		console.log('Hello, Alena');
// 	}
// 	getInfo() {
// 		console.log('Hello, Alena');
// 	}
// }

// let funcs = ['getName', 'getInfo'];

// funcs.forEach(function(item){
// 	user[item]();
// })

// Animals

// const animalsArr = [];

// const VOICES = {
// 	bird: 'chik-chirik',
// 	lion: 'arrr',
// 	wolf: 'auuuu'
// }

// class Animal{
// 	constructor(name, type){
// 		this.name = name;
// 		this.type = type;

// 		animalsArr.push(this);
// 	}

// 	getVoice() {
// 		return `I'm ${this.type} ${this.name}, I can say ${VOICES[this.type] ? VOICES[this.type] : 'Hello' }.`
// 	}
// }

// interface BirdClass{
// 	birdFunc() {}
// }

// class Bird extends Animal from BirdClass{
// 	constructor(name){
// 		super(name, `bird`);
// 	}
// 	birdFunc() {}
// }

// class Parrot extends Animal{
// 	constructor(name){
// 		super(name, `bird`);
// 	}
// 	birdFunc() {}
// }


// class Fox extends Animal{
// 	constructor(name){
// 		super(name, `fox`);
// 	}
// }

// class Lion extends Animal{
// 	constructor(name){
// 		super(name, `lion`);
// 	}
// 	birdFunc() {}
// }

// let Ptichka_1 = new Bird('Ptichka_1'),
// 	Ptichka_2 = new Bird('Ptichka_2'),
// 	Lion_1 = new Animal(`lion`, 'Lion_1'),
// 	Lion_2 = new Animal(`lion`, 'Lion_2'),
// 	Wolf_1 = new Animal(`wolf`, 'Wolf_1'),
// 	Wolf_2 = new Animal(`wolf`, 'Wolf_2'),
// 	Fox = new Animal(`fox`, 'Fox_1');

// animalsArr
// 	.forEach(function(animal){
// 		console.log( animal.getVoice() );
// 	})


// function sum(...args){
// 	return args.reduce(function(sum, item){return sum+item})
// }

// function multiply(value){
// 	return value*10;
// }

// let result = multiply( sum(10,20,30,40) )

// [10,true,100]
// 	.filter()
// 	.map()
// 	.forEach()

// class Animal{
// 	constructor(name){
// 		this.name = name;
// 	}

// 	getVoice() {
// 		return `Hello, ${this.name}.`
// 	}
// }

// class Cat extends Animal{
// 	constructor(name, country){
// 		super(name);
// 		this.country = country;
// 	}

// 	getVoice() {
// 		return super.getVoice() + `I'm from ${this.country}.`;
// 	}
// }

// class Dog extends Animal{
// 	constructor(name){
// 		super(name);
// 	}
// }