// Function
// debugger;
// animals = [
//   ['cat', 6],
//   ['dog', 2],
//   ['fox', 4],
// ];

// wildAnimals = [
//   ['lion', 4],
//   ['bear', 9],
//   ['owl', 3],
// ];

// koefHumanToAnimal = 4;
// koefHumanToWildAnimal = 8;

// function cloneArray(array) {
// debugger;
//   newArray = [];
//   for (i = 0; i < array.length; i++) {
//     if (Array.isArray(array[i])) {
//       newArray.push(array[i].slice());
//     } else {
//       newArray.push(array[i]);
//     }
//   }

//   return newArray;
// }

// cloneAnimals = cloneArray(animals);
// cloneWildAnimals = cloneArray(wildAnimals);

// function calculationOfHumanKoef(koef, array) {
// debugger;
//   for (i = 0; i < array.length; i++) {
//     array[i][1] *= koef;
//   }
// }

// function renderAnimalInfo(currentArray, calcArray) {
// debugger;
//   list = [];

//   for (i = 0; i < calcArray.length; i++) {
//     list.push(`<li>A ${calcArray[i][0]} is ${currentArray[i][1]} age old, but as a human it's ${calcArray[i][1]} age old</li>`);
//   }

//   document.write(`<ul>${list.join('')}</ul>`);
// }

// calculationOfHumanKoef(koefHumanToAnimal, cloneAnimals);
// calculationOfHumanKoef(koefHumanToWildAnimal, cloneWildAnimals);

// renderAnimalInfo(animals, cloneAnimals);
// renderAnimalInfo(wildAnimals, cloneWildAnimals);

// console.log(animals);
// console.log(wildAnimals);


// Lexical environment, scopes
// var - застаріле ключове слово для визначення змінних
// Глобальна і локальна

// var firstName = 'Sasha';
// var lastName = 'Dontsova';
// debugger;

// function f1() {
//   var x = 10;
//   firstName = 'Maksym';
//   console.log(firstName);
//   debugger;
// }
// f1();

// console.log(firstName);

// let
// const
// Глобальна, локальна, блочна
// not hoist to the global window

// const a = 10;
// if (true) {
//   // debugger;
//   console.log(a);
//   let a = 10;
// }
// a = 5;

// console.log(a);


// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log(i);

// renderName();

// function renderName() {
//   console.log('My name is Sasha!');
// }
// const x = [1,2,34,5];
// x = 5;


// hoisting
// closure

// const a = 'abcdef';

// function f1() {
//   const a = 19;
//   function f2() {
//     function f3() {
//       if(true) {
//         function f4() {
//           console.log(a);
//         }

//         f4();
//       }
//     }

//     f3();
//   }

//   f2();
// }

// f1();


function init() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const callFunction = init();
console.log(callFunction);
callFunction();
callFunction();
callFunction();
callFunction();
callFunction();
