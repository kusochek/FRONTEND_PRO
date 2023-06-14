// const today = new Date();
// const currentYear = today.getFullYear();

// const parent = {
// 	firstName: 'Pasha',
// 	age: 29,
// 	getYearOfBirth() {
// 		return currentYear - this.age;
// 	},
// };

// const child = Object.create(parent);

// child.firstName = 'Petya';
// child.age = 15;

// console.log(child.getYearOfBirth());

// Car
// Object.keys
// arrow function
// render info, list (problem)
// add maxSpeed, add default

// function Car(mark, model, kuzov) {
//   this.mark = mark;
//   this.model = model;
//   this.kuzov = kuzov;
// }

// Car.prototype.maxSpeed = 300;

// Car.prototype.render = function() {
//   // const list = [];

//   // for (let key in this) {
//   //   if (typeof this[key] !== 'function') {
//   //     list.push(`<li>${key}: ${this[key]}</li>`);
//   //   }
//   // }

//   const list = Object.keys(this).map((key) => {
//     return `<li>${key}: ${this[key]}</li>`;
//   });

//   document.write(`<ul>${list.join('')}</ul>`);
// };

// const bmw = new Car('BMW', 'X5', 'universal');
// const audi = new Car('Audi', 'Q7', 'rover', 350);

// audi.maxSpeed = 350;

// console.log(bmw);
// console.log(audi);

// bmw.render();
// audi.render();

// const foo1 = function() {};
// const foo1 = (arg1, arg2) => (
//   `<ul>
//     <li>${arg1}</li>
//     <li>${arg2}</li>
//   </ul>`
// );

// console.log(foo1(100, 234));

// const array = [34, 100, 2, 29, 33, 1923];

// array.forEach(item => {
//   document.write(`<p>${item}</p>`);
// });

// const newArray = array.map(item => `<li>${item}</li>`);
// document.write(`<ul>${newArray.join('')}</ul>`);



// Human (have different properties), add run
// Then add Man, Woman
// Trying to add the same thing but with different fields

// function Human() {};

// Human.prototype.getRunTime = function() {
//   let time = 10;
//   if (this.smoking) time *= 2;

//   return time;
// };

// function Man(name, smoking, boroda) {
//   this.name = name;
//   this.smoking = smoking;
//   this.boroda = boroda;
// }

// Man.prototype = Object.create(Human.prototype);

// function Woman(name, smoking, child) {
//   this.name = name;
//   this.smoking = smoking;
//   this.child = child;
// }

// Woman.prototype = Object.create(Human.prototype);

// Woman.prototype.getRunTime = function() {
//   let time = Human.prototype.getRunTime.call(this);
//   if (this.child) time /= 1.5;

//   return time;
// }


// const taras = new Man('Taras', true, true);
// const alina = new Woman('Alina', true, true);

// console.log(taras.getRunTime());
// console.log(alina.getRunTime());

// call, apply, bind

// const Elza = {
//   sister: 'Anna',
//   getSisterName(color, age) {
//     return `Hello! I have sister ${this.sister}! Her favorite color ${color}. She is ${age} old.`;
//   },
// };

// const Cinderella = {
//   sister: 'Anton',
// }

// console.log(Elza.getSisterName('green', 21));

// const arg = ['yellow', 22];

// console.log(Elza.getSisterName.call(Cinderella, 'red', 31));
// console.log(Elza.getSisterName.apply(Cinderella, arg));
// const res = Elza.getSisterName.bind(Cinderella);
// console.log(res('black', 40));



// Class 
// Car
// for key
// Human
// run
// Cat

// function Car(mark, model, kuzov) {
//   this.mark = mark;
//   this.model = model;
//   this.kuzov = kuzov;
// }

// class Car {
//   constructor(mark, model, kuzov, maxSpeed = 300) {
//     this.mark = mark;
//     this.model = model;
//     this.kuzov = kuzov;
//     this.maxSpeed = maxSpeed;
//   }

//   render() {
//     const list = Object.keys(this).map((key) => {
//       return `<li>${key}: ${this[key]}</li>`;
//     });

//     document.write(`<ul>${list.join('')}</ul>`);
//   }
// }

// const bmw = new Car('BMW', 'X5', 'universal');
// const audi = new Car('Audi', 'Q7', 'rover', 350);

// console.log(bmw);
// console.log(audi);

// bmw.render();
// audi.render();

class Human {
  constructor(name, smoking) {
    this.name = name;
    this.smoking = smoking;
  }

  getRunTime() {
    let time = 10;
    if (this.smoking) time *= 2;

    return time;
  }
}

class Man extends Human {
  constructor(name, smoking, boroda) {
    super(name, smoking);
    this.boroda = boroda;
  }
}

class Woman extends Human {
  constructor(name, smoking, child) {
    super(name, smoking);
    this.child = child;
  }

  getRunTime() {
    let time = super.getRunTime();

    if (this.child) time /= 1.5;
    return time;
  }
}

const taras = new Man('Taras', true, true);
const alina = new Woman('Alina', true, true);

console.log(taras.getRunTime());
console.log(alina.getRunTime());


// THIS
// function ? this = function
// => ? this = windows || function outside
// call bind apply ? first argument call
// in obj ? this obj
// look for obj called before method