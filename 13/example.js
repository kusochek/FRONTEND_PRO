function Car(marka, model, kuzov) {
	this.marka = marka;
	this.model = model;
	this.kuzov = kuzov
}

Car.prototype.maxSpeed = "300";

Car.prototype.renderCarInfo = function() {
	let li = [];
	for(let key in this) {
		if(typeof this[key] !== 'function' && this.hasOwnProperty(key))
			li.push(`<li>${key}: ${this[key]}</li>`)
	}

	return li.join("");
};

Car.prototype.getMaxSpeed = function() {
	if(this.hasOwnProperty("maxSpeed")) {
		return `${this.marka}${this.model} max speed = ${this.maxSpeed}`
	}

	return `Perhaps ${this.marka}${this.model} max speed = ${this.maxSpeed}`
}

let AudiS5 = new Car("Audi", "S5", "sedan");
let BMWX5 = new Car("BMW", "X5", "universal");

BMWX5.maxSpeed = "320";

document.write(`<ul>${AudiS5.renderCarInfo()}</ul>`);
document.write(`<ul>${BMWX5.renderCarInfo()}</ul>`);

console.log(AudiS5.getMaxSpeed());
console.log(BMWX5.getMaxSpeed());





function Human(name, smoking, gender, child) {
	this.name = name;
	this.smoking = smoking;
	this.gender = gender;
	this.child = child;
}

Human.prototype.run = function() {
	let runSpeed = 10;
	if(this.smoking) runSpeed *= 2;

	// if(this.gender === "w" && this.child) runSpeed *= 3;

	return runSpeed;
}


let Anton = new Human("Anton", true, "m");
let Anna = new Human("Anna", false, "w", true);

Anna.run = function(){
	let time = 10;
	if(this.smoking)
		time *= 2;

	if(this.gender === 'w' && this.child){
		time *= 3;
	}

	return time;
}

console.log(Anton.run());
console.log(Anna.run());




function Human() {}
Human.prototype.run = function() {
	console.log(this);
	let time = 10;
	if(this.smoking) time *= 2;

	return time;
}


function Man(name, boroda, smoking = false) {
	this.name = name;
	this.smoking = smoking;
	this.boroda = boroda;
}
Man.prototype = Object.create(Human.prototype);

Man.prototype.getBoroda = function() {
	return this.boroda ? "Ect' boroda" : "Net boroda"
}


let Anton1 = new Man("Anton", true);

console.log(Anton1.getBoroda());
console.log(Anton1.run());
console.log(Anton1);

function Woman(name, child, smoking) {
	this.name = name;
	this.child = child;
	this.smoking = smoking;
}

Woman.prototype = Object.create(Human.prototype);

let Alina = new Woman("Alina", true, true);
let Anna = new Woman("Anna", true, false);

Woman.prototype.run = function() {
	let time = Human.prototype.run.call(this);
	if(this.child) time *= 3;

	return time;
}

console.log(Alina);
console.log(Alina.run());
console.log(Anna.run());




let user = {
	name: "Vasya",
	getInfo(symb, smile) {
		console.log(`My name is ${this.name}${symb} ${smile}`);
	}
}

let cat = {
	name: "Barsik",
}

user.getInfo("!", "$)))");
user.getInfo.call(cat, "?", ":))");
user.getInfo.apply(cat, ["?", ":))"]);
let newResult = user.getInfo.bind(cat, "?", ":))");
console.log(newResult());




// CLASS

function Car(model){
	this.model = model;
}

Car.prototype.getModel = function(){
	return this.model;
}

class Car {
	constructor(model) {
		this.model = model;
	}

	getModel() {
		return `Model: ${this.model}`
	}
}


// let AudiS5 = new Car("Audi");
console.log(AudiS5.getModel());
console.log(AudiS5);

for(let key in AudiS5) {
	console.log(key);
}



class Cat {
	constructor(cat) {
		if(cat) this.cat = cat;
	}

	getCat() {
		return `Cat name ${this.cat}`
	}
}

class Human extends Cat {
	constructor(name, cat) {
		super(cat);
		this.name = name;
	}

	getInfo() {
		return `My name is ${this.name}`
	}
}


class Woman extends Human {
	constructor(name, child, smoking, cat) {
		super(name, cat);
		this.child = child;
		this.smoking = smoking;
	}
}

class Man extends Human {
	constructor(name, boroda) {
		super(name);
		this.boroda = boroda;
	}
}

// let Alina = new Woman("Alina", true, true, "Alisa");
let Alona = new Woman("Alona", false, false);
let Maksim = new Man("Maksim", false);

console.log(Alina);
console.log(Alona);
console.log(Maksim);
console.log(Alina.getInfo());
console.log(Alina.getCat());


class Human {
	constructor(name, smoking) {
		this.name = name;
		this.smoking = smoking;
	}

	run() {
		let time = 10;
		if(this.smoking) time *= 2;

		return time;
	}
}

class Woman extends Human {
	constructor(name, smoking, child) {
		super(name, smoking);
		this.child = child;
	}

	run() {
		let time = super.run();
		if(this.child) time *= 3;

		return time;
	}
}

let Sofia = new Woman("Sofia", true, true);

console.log(Sofia.run());