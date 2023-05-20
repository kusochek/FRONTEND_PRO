// sports = [
//   ['skier', '⛷'],
//   ['snowboarder', '🏂'],
//   ['apple', '🍎'],
//   ['hockey', '🏒'],
//   ['ice skate', '⛸'],
//   ['swimmer', '🏊'],
//   ['surfer', '🏄‍'],
//   ['watermelon', '🍉'],
//   ['lemon', '🍋'],
//   ['rowboat', '🚣'],
//   ['bicyclist', '🚴‍'],
// ];

// winterSports = sports.slice(0, 5);
// summerSports = sports.slice(5);

// fruits = winterSports.splice(2, 1).concat(summerSports.splice(2, 2));

// console.log(winterSports, summerSports, fruits);



// Chess
// debugger;
// TRs = [];
// alphabet = 'abcdefgh';
// figures = ['rook', 'horse', 'bishop', 'queen', 'king'];
// figures = figures.concat(figures.slice(0, 3).reverse());

// for (tr = 10; tr >= 1; tr--) {
//   TDs = [];
//   color = tr > 5 ? 'black' : 'white';

//   for (td = 1; td <= 10; td++) {
//     data = '';

//     if ((td === 1 || td === 10) && tr !== 1 && tr !== 10) {
//       data = tr - 1;
//     }

//     if ((tr === 1 || tr === 10) && td !== 1 && td !== 10) {
//       data = alphabet[td - 2]
//     }

//     if ((tr === 3 || tr === 8) && td !== 1 && td !== 10) {
//       data = `<img src="images/chess/${color}/pawn.svg" alt="pawn" />`;
//     }

//     if ((tr === 2 || tr === 9) && td !== 1 && td !== 10) {
//       data = `<img src="images/chess/${color}/${figures[td - 2]}.svg" alt="pawn" />`;
//     }

//     TDs.push(`<td>${data}</td>`);
//   }

//   TRs.push(`<tr>${TDs.join('')}</tr>`);
// }

// document.write(`<table class='chess'>${TRs.join('')}</table>`);


// new Array();
// random
// min max swipe

// array = new Array(+prompt('Enter length of random values?'));

// for (i = 0; i < array.length; i++) {
//   randomValue = Math.round(Math.random() * (100 - 1) + 1);
//   array[i] = randomValue;
// }

// console.log(array);

// for (i = 0, max=min=array[0]; i < array.length; i++) {
//   if (array[i] > max) max = array[i];
//   if (array[i] < min) min = array[i];
// }

// console.log(`Maximum of the array: ${max}`);
// console.log(`Minimum of the array: ${min}`);


// document.write(`<div class='red' style='background-color: blue'></div>`);


// Function
// much call
// different data, function arguments
// default arguments
// return, anything after
// more then 1 return

// function renderUserName(name, age) {
//   console.log(name, age);
// }

// renderUserName('Sasha', 29);
// renderUserName('Dasha', 35);
// renderUserName('Oleksii', 18);
// renderUserName('Maksym', 20);

function sumValues(a, b = 50) {
  sum = a + b;
  return sum;
  // console.log('Hello its call after return'); // will never call
}

sumResult = sumValues(10, 20);
// sumResult2 = sumValues(100, 200);
console.log(sumResult);
// console.log(sumResult2);
// console.log(sumValues(sumResult, sumResult2));

// console.log(sumValues(10, 33));
// console.log(sumValues(21, 145));
// console.log(sumValues(20, 22));
// console.log(sumValues(0, -10));

// fruits = ['apple', 'banana', 'pineapple'];
// vegetables = ['potato', 'tomato', 'cucumber'];

// for (i = 0; i < fruits.length; i++) {
//   fruits[i] = `${fruits[i][0].toUpperCase()}${fruits[i].slice(1)}`;
// }

// for (i = 0; i < vegetables.length; i++) {
//   vegetables[i] = `${vegetables[i][0].toUpperCase()}${vegetables[i].slice(1)}`;
// }

// function replaceFirstLetter(array) {
//   for (i = 0; i < array.length; i++) {
//     array[i] = `${array[i][0].toUpperCase()}${array[i].slice(1)}`;
//   }
// }

// replaceFirstLetter(fruits);
// replaceFirstLetter(vegetables);

// console.log(fruits);
// console.log(vegetables);


// arr = [1,2,3,4,5];

// arr1 = arr.slice(1, 4);
