// Деструктурирующее присваивание

// const colors = ['red', 'green', 'blue', 'yellow', ['00ffff', '00fafa', '00efe8', ['00fgfg']], 'indigo', 'violet', 'black', 'white', ['f6d122', '123456']];

// const RED = colors[0];
// const GREEN = colors[1];
// const BLUE = colors[2];
// const YELLOW = colors[3];
// const YELLOW1 = colors[4][0];
// const YELLOW2 = colors[4][1];
// const YELLOW3 = colors[4][3];

// const METHODS = {
//   GET: 'get',
//   PUT: 'put',
// }

// enum METHODS {
//   GET = 'get',
//   PUT = 'put'
// }


// const someColor = colors[Math.round(colors.length / 2)];

// const [RED, GREEN, BLUE, YELLOW, [YELLOW1, YELLOW2, YELLOW3, [ONE_MORE_YELLOW]], ...otherColors] = colors;
// console.log(RED, GREEN, BLUE, YELLOW, otherColors);
// console.log(YELLOW1, YELLOW2, ONE_MORE_YELLOW);

// const [INDIGO, VIOLET, WHITE, BLACK, [SOME_COLOR]] = otherColors;

// const user = {
//   firstName: 'Denis',
//   lastName: 'Babok',
//   age: 23,
//   pet: ['cat', 'dog', 'spider', { data: 1 }],
// };

// const NAME = user.firstName;
// const lastName = user.lastName;

// const CAT = user.pet[0];

// const { firstName: NAME, lastName, age, pet: [CAT, DOG, SPIDER, { data }], gender } = user;
// const { lastName } = user;

// console.log(NAME, lastName, age, pet, gender);
// console.log(lastName, CAT, DOG, SPIDER, data);

// const response = {
//   data: {
//     user: {
//       firstName: 'Denis',
//       lastName: 'Babok',
//       age: 23,
//     }
//   }
// };

// const { data: { user } } = response;
// const { firstName, lastName } = user;

// console.log(firstName, lastName, user);

// async function getTodoList() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await response.json();

//   const [firstPost, secondPost] = data;
//   const { userId, title } = firstPost;

//   console.log(firstPost, secondPost);
//   console.log(userId, title);
// }

// getTodoList();


// async function getUsersList() {
//   const response = await fetch('https://64d3c02367b2662bf3dcaac5.mockapi.io/api/v1/users');
//   const [userOne, userTwo] = await response.json();

//   console.log(userOne, userTwo);
// }

// getUsersList();


// MODULES
// MVC - pattern
// MODULE-VIEW-CONTROLLER

// import { x, y } from './components/variables.js';
// import sum from './components/module.js';
import axios from 'axios';

// const result = sum(x, y);
// console.log(result);

console.log(axios);


// npm
