cats = ['lion', 'puma', 'leopard', 'cat'];

// for (i = 0; i < cats.length; i++) {
//     if (cats[i] === 'cat') {
//         document.write(`
//             <img src='images/${cats[i]}.jpg' alt='${cats[i]}' width='200' />
//         `);
//     } else {
//         document.write(`
//             <img src='images/${cats[i]}.jpeg' alt='${cats[i]}' width='200' />
//         `);
//     }
// }

// do {
//     choosenCat = prompt('Please, choose any cat?', 'cat');
// } while (!cats.includes(choosenCat));

// document.write(`
//     <img src='images/${choosenCat}.jpeg' alt='${choosenCat}' width='200' />
// `);


// Example 1
// colors = ['red','yellow','green', 'violet', 'black'];

// document.write('<div class="wrapp">');
// for (i = 0; i < colors.length; i++) {
//     document.write(`
//         <div class='circle' style='background-color: ${colors[i]}'></div>
//     `);
// }
// document.write('</div>');

// divColors = [];

// for (i = 0; i < colors.length; i++) {
//     divColors.push(`<div class='circle' style='background-color: ${colors[i]}'></div>`);
// }

// document.write(`
//     <div class='wrapp'>${divColors.join('')}</div>
// `);


// Example 2
// debugger;
// animalsTypes = ['dog', 'cat', 'mouse', 'fox', 'bear','tiger', 'dolphin', 'whale'];
// animalsIcons = ['🐶','🐱','🐭', '🦊','🐻','🐯','🐬','🐳','❓'];
// '❓'

// biggestArrayLength = animalsIcons.length > animalsTypes.length ? animalsIcons.length : animalsTypes.length;

// for (i = 0; i < biggestArrayLength; i++) {
//     resultString = `${animalsIcons[i] || '❓'} - ${animalsTypes[i] || 'some other animal'}`;
//     console.log(resultString);
// }


// colors = ['red', 'blue', 'white', 'yellow'];


// Example 3
// debugger;
arr_1 = [10,4,2,9,7,7];
arr_2 = [8,2,1,6,4,10,6];
arr_3 = []; // 9, 7, 8, 1, 6

// for (i = 0; i < arr_1.length; i++) {
//     if (!arr_2.includes(arr_1[i]) && !arr_3.includes(arr_1[i])) {
//         arr_3.push(arr_1[i]);
//     }
// }

// for (i = 0; i < arr_2.length; i++) {
//     if (!arr_1.includes(arr_2[i]) && !arr_3.includes(arr_2[i])) {
//         arr_3.push(arr_2[i]);
//     }
// }

// console.log(arr_3);

// concatArray = arr_1.concat(arr_2);
// newArr = [];

// for (i = 0; i < concatArray.length; i++) {
//     if (!newArr.includes(concatArray[i])) {
//         newArr.push(concatArray[i]);
//     }
// };

// console.log(newArr);


// вложенные массивы
// Array.isArray
// debugger;
// array = [0, '', 11, -10, 'string', false, null];
// user = [
//     ['Maksym', 'Jenya', 'Kolya'],
//     ['Masha', 'Dasha', 'Sasha'],
//     10,
//     false,
// ];

// newUser = [];

// for (i = 0; i < user.length; i++) {
//     if (Array.isArray(user[i])) {
//         cloneArray = user[i].slice();
//         newUser.push(cloneArray);
//     } else {
//         newUser.push(user[i]);
//     }
// }

// console.log(newUser);

// for (i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'number') {
//         console.log(array[i]);
//     }
// }


// Example (only number)


// concat
// join
// split

// array = ['Sasha', 'Petya', 'Vasya'];
// arrayString = array.join(', ');
// console.log(arrayString);

// string = 'What❓is❓the❓happy❓mean?';
// stringArray = string.split('❓');
// console.log(stringArray);
