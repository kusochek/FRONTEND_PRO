// const array = [1, 2, 3, [100, 200, 300, [1000, 2000, 3000]]];

// function deepClone(array) {
//   const copyArray = array.map(function (item) {
//     return Array.isArray(item) ? deepClone(item) : item;
//   });

//   return copyArray;
// }

// console.log(deepClone(array));


// HW

// Создать объект с такой структурой: obj = { x: 10, y: 20, inner: { x: 20, z: 30 }, foo2: { k: 23, p: 13 } } 
// Написать функцию convert(obj), которая получает аргументом obj. Функция должна вернуть новый объект вида:

// const obj = {
//   x: 10,
//   y: 20,
//   inner: {
//     x: 20,
//     z: 30,
//     o: { a: 12, b: 13 },
//   },
//   foo2: {
//     k: 23,
//     p: 13,
//   },
//   someKey: 10,
// };

// obj.foo = function () {
//   console.log(obj.x + obj.y);
// };

// obj.foo();

// console.log(obj.toString());

// const someValue = 'foo2';

// console.log(obj.inner);
// console.log(obj[someValue]);

// function assign(object) {
//   const newObj = {}; // {x:20, y:20, z:30, a:12, b:13...}

//   for (let key in object) {
//     if (typeof object[key] === 'object') {
//       Object.assign(newObj, assign(object[key]));
//     } else {
//       newObj[key] = object[key];
//     }
//   }

//   return newObj;
// }

// const result = assign(obj);
// console.log(result);




// __proto__
// prototype
// myMethod (str)

// const arr = [1,2,3]; 

// arr.concat([123, 1245, 333]);
// let arr = [
//     1,
//     2,
//     length: 2,
//     __proto__: Array(0)
//     at: ƒ at()
//     concat: ƒ concat()
//     constructor: ƒ Array()
//     copyWithin: ƒ copyWithin()
//     entries: ƒ entries()
//     every: ƒ every()
//     fill: ƒ fill()
//     filter: ƒ filter()
//     find: ƒ find()
//     findIndex: ƒ findIndex()
//     findLast: ƒ findLast()
//     findLastIndex: ƒ findLastIndex()
//     flat: ƒ flat()
//     flatMap: ƒ flatMap()
//     forEach: ƒ forEach()
//     includes: ƒ includes()
//     indexOf: ƒ indexOf()
//     join: ƒ join()
//     keys: ƒ keys()
//     lastIndexOf: ƒ lastIndexOf()
//     length: 0
//     map: ƒ map()
//     pop: ƒ pop()
//     push: ƒ push()
//     reduce: ƒ reduce()
//     reduceRight: ƒ reduceRight()
//     reverse: ƒ reverse()
//     shift: ƒ shift()
//     slice: ƒ slice()
//     some: ƒ some()
//     sort: ƒ sort()
//     splice: ƒ splice()
//     toLocaleString: ƒ toLocaleString()
//     toString: ƒ toString()
//     unshift: ƒ unshift()
//     values: ƒ values()
//     Symbol(Symbol.iterator): ƒ values()
//     Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}
//     [[Prototype]]: Object
//     constructor: ƒ Object()
//     hasOwnProperty: ƒ hasOwnProperty()
//     isPrototypeOf: ƒ isPrototypeOf()
//     propertyIsEnumerable: ƒ propertyIsEnumerable()
//     toLocaleString: ƒ toLocaleString()
//     toString: ƒ toString()
//     valueOf: ƒ valueOf()
//     __defineGetter__: ƒ __defineGetter__()
//     __defineSetter__: ƒ __defineSetter__()
//     __lookupGetter__: ƒ __lookupGetter__()
//     __lookupSetter__: ƒ __lookupSetter__()
//     __proto__: (...)
//     get __proto__: ƒ __proto__()
//     set __proto__: ƒ __proto__()
// ];



// obj includs methods
// 3 common obj, with methods
// slice methods
// this

// const str = [];
// const value = 'The little';

// const number = 4;

// number.__proto__.atatata = function (prevValue, newValue) {
//   return prevValue + newValue;
// };

// ''.__proto__.push = function (prevValue, newValue) {
//   return prevValue + newValue;
// };

// console.log(str.push(str, ' world!'));
// console.log(value.push(value, ' Mermaid!'));
// console.log(number.atatata(number, 8));

// String.prototype.push = function (newValue) {
//   return prevValue + newValue;
// }

// Boolean.prototype.toggle = function (prevValue) {
//   return !prevValue;
// }

// const str = 'Hello';

// str.push(' world!');

// const today = new Date();

// const user = {
//   name: 'Galina',
//   age: 20,
//   pets: ['dog', 'spider'],
//   getUserYearOfBirth() {
//     const currentYear = today.getFullYear();
//     console.log(this);

//     return currentYear - this.age;
//   },
// };

// console.log(user.getUserYearOfBirth());

// function foo() {
//   console.log(this);
// }

// foo();


// myPush
// arguments

const str = 'Hello';
const str1 = 'Sasha';
const str2 = 'Masha';

String.prototype.push = function (newValue) {
  console.log(this);

  return this + newValue;
}

const newStr = str.push(' world!');
console.log(newStr);

String.prototype.forEach = function () {
  let newStr = '';
  for (let i = 0; i < this.length; i++) {
    newStr += `${this[i]}!`;
  }

  return newStr;
}

console.log(str.forEach());
console.log(str1.forEach());
console.log(str2.forEach());

