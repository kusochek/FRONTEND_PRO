// function calcSum(){
//     let sum = 0;

//     function sumWithClosure(number){
//         sum += number;
//         return sum;
//     }
//     return sumWithClosure;
// }

// let callFunction = calcSum();
// console.log(callFunction(5)); 
// console.log(callFunction(3));
// console.log(callFunction(10));

// Написать функцию, которая принимает как аргумент(параметр) два массива и 
// сравнивает суммы всех ЧИСЛОВЫХ элементов. 
// Тот массив, сумма которого большая – должен вернутся функцией.

// const firstArr = [1, 2, 3, 'hello', 4, 10, true, function f1() { }]; // 20
// const secondArr = [1, 2, 3, true, 4, undefined, 6]; // 16

// function calcSum(array) { // functuin declaration
//   let sum = 0;

//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'number') {
//       sum += array[i]
//     }
//   }

//   return sum;
// }

// const calcSum = function(array) { // function expresion
//   let sum = 0;

//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'number') {
//       sum += array[i]
//     }
//   }

//   return sum;
// };

// function compareArrays(firstArrOther, secondArrOther) {
//   const firstSum = calcSum(firstArrOther);
//   const secondSum = calcSum(secondArrOther);

//   return firstSum > secondSum ? firstArr : secondArr;
// }

// const biggestArray = compareArrays(firstArr, secondArr);
// console.log(biggestArray);


// RECURSION
// function f1() {
//   f1();
// }
// f1();


// Реализовать функцию copy(list) по копированию массива.
// Предусмотреть возможность передачи вторым аргументом функции. 
// При копировании массива – функция применяется к каждому элементу копируемого массива.

// const arr = [1, 2, [10, 20], [100, 200, [30, 40, [1000, 2000]]]];

// function deepClone(array) {
//   debugger;
//   const copyArray = [];

//   for (let i = 0; i <array.length; i++) {
//     if (Array.isArray(array[i])) {
//       const tempClone = deepClone(array[i]);
//       copyArray.push(tempClone);
//     } else {
//       copyArray.push(array[i]);
//     }
//   }

//   return copyArray;
// }

// function clone(array, func) {
//   // debugger;
//   const copyArray = [];

//   for (let i = 0; i <array.length; i++) {
//     if (Array.isArray(array[i])) {
//       const tempClone = clone(array[i], func);
//       copyArray.push(tempClone);
//     } else {
//       copyArray.push(func(array[i]));
//     }
//   }

//   return copyArray;
// }

// function multiply(number) {
//   return number *= 5;
// }

// function sum(number) {
//   return number += 5;
// }

// const result = clone(arr, multiply);
// const resultTwo = clone(arr, sum);

// console.log(result);




// forEach

// const fruits = ['apple', 'orange', 'peach', 'strawberry'];
// const upperCaseFruits = [];

// fruits.forEach(function(fruit, index) {
//   // if (item === 'apple') fruits[index] = 'Big apple';
//   // document.write(`<p>${fruit}</p>`);
//   upperCaseFruits.push(`${fruit[0].toUpperCase()}${fruit.slice(1)}`);
// });

// console.log(fruits);
// console.log(upperCaseFruits);


// map

// const result = fruits.map(function(fruit) {
//   return `${fruit[0].toUpperCase()}${fruit.slice(1)}`;
// });

// console.log(fruits);
// console.log(result);


// filter

const users = [
  ['Anna', 26, 'female', 'green'],
  ['Borya', 41, 'male', 'brown'],
  ['Elza', 31, 'female', 'blue'],
  ['Vasya', 19, 'male', 'blue'],
  ['Maksym', 30, 'male', 'brown'],
];

// const newArr = [];

// for (let i = 0; i < users.length; i++) {
//   if (users[i][2] === 'male') {
//     newArr.push(user[i])
//   }
//   console.log(users[i]);
// }
const today = new Date();
const currentYear = today.getFullYear();

const olList = users
  .filter(function(user) {
    return user[2] === 'male';
  })
  .map(function(men) {
    men.push(currentYear - men[1]);
    return men;
  })
  .map(function(men) {
    return `<li>Name: ${men[0]}, year of birth ${men[4]}, eyes color ${men[3]}</li>`;
  })
  .join('');

document.write(`<ol>${olList}</ol>`);

// console.log(maleUsers);


// 1. Array of icons should be reversed.

// 2. Rendered list looks like:
// 	<ul>
// 		<li>dog Pushok 🐶</li>
// 		<li>mouse Jerry 🐭</li>
// 		<li>lion Simba 🦁</li>
// 	</ul>

// 	or

// 	<ol>
// 		<li>dog Pushok 🐶</li>
// 		<li>mouse Jerry 🐭</li>
// 		<li>lion Simba 🦁</li>
// 	</ol>

// 3. Original arrays should not change.

// const types = [`dog`,`mouse`,`lion`];
// const icons = [`🦁`, `🐭`, `🐶`];
// const names = [`Pushok`, `Jerry`, `Simba`];
