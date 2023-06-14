// function f1() {
//   let amount = 0;

//   return function sum(value) {
//     return amount += value;
//   }
// }

// const someFunc = f1();
// // const someFunc = function sum(value) {
// //     return amount += value;
// // };

// someFunc(5);
// someFunc(50);
// someFunc(500);

// HW 19
// const symbols = prompt('What sybol do you want to delete?');
// const symbolsArray = symbols.split(', ');

// console.log(symbolsArray);

// Сконвертировать время потраченное на выполнение задач в часы, вместо минут.
// Оставить только те задачи, на выполнение которых нужно более 2-х часов.
// Умножить результат на часовую ставку (amount) и добавить полученное значение в качестве третъего элемента в массив.
// Вывести в html таблицу, которая состоит из ячеек с задачами в виде:

// <tr>
//  <td>Task name: Write a tutorial</td>
//  <td>Taks duration: 3 hours</td>
//  <td>Task amount: $300</td>
// </tr>

// const amount = 100;
// const monday = [
//   ['Write a tutorial', 180],
//   ['Some web development', 120]
// ];
// const tuesday = [
//   ['Keep writing that tutorial', 240],
//   ['Some more web development', 360],
//   ['A whole lot of nothing', 90]
// ];

// function getHours(currentArray) {
//   return currentArray.map(function (item) {
//     item[1] = item[1] / 60;
//     return item
//   });
// }

// function filterByPaidHours(currentArray) {
//   return currentArray.filter(function (item) {
//     return item[1] > 2;
//   })
// }

// function filterArray(currentArray) {
//   const filterArray = currentArray
//     .map(function(item) {
//       item[1] = item[1] / 60;
//       return item
//     })
//     .filter(function(item) {
//       return item[1] > 2;
//     })
//     .map(function(item) {
//       item.push(item[1] * amount);
//       return item;
//     })
//     .map(function(item) {
//       return `
//         <tr>
//           <td>Task name: ${item[0]}</td>
//           <td>Taks duration: ${item[1]} hours</td>
//           <td>Task amount: $${item[2]}</td>
//         </tr>
//       `;
//     })
//     .join('');

//   return filterArray;
// }

// document.write(`
//   <h2>Monday</h2>
//   <table>${filterArray(monday)}</table>
//   <h2>Tuesday</h2>
//   <table>${filterArray(tuesday)}</table>
// `);


// find
// findIndex

// const array = [10, 20, true, null, 'Hello world!', function f1() {}, undefined];

// const result = array.find(function(item) {
//   return typeof item === 'number';
// });

// console.log(result);



// some/every
// const array = [10, 20, true, null, 'Hello world!', function f1() {}, undefined];
// const array = [null, null, null, null, 'Hello world!', function f1() {}, undefined];

// const result = array.every(function(item) {
//   return item === null;
// });

// console.log(result);

// const user = [
//   [
//     ['Andrew', 29, 'male'],
//     ['Vasya', 45, 'male'],
//     ['Kolya', 20, 'male'],
//     ['Yudgin', 18, 'male'],
//   ],
//   [
//     ['Masha', 29, 'female'],
//     ['Sasha', 19, 'female'],
//     ['Dasha', 30, 'female'],
//   ],
//   [
//     ['Petr', 29, 'male'],
//     ['Natasha', 29, 'female'],
//     ['David', 5, 'children'],
//     ['Anna', 29, 'female'],
//     ['Ahata', 10, 'children'],
    
//   ],
// ];

// const filetrArray = user.find(function(item) {
//   return item.every(function(user) {
//     return user[2] === 'female';
//   });
// });

// console.log(filetrArray);

// forEach - undefined
// map - new array
// filter - new filter array
// find - current value
// findIndex - index
// some/every - boolean
// reduce - everything

// reduce

// const array = [6, 18, 24, 36];

// const result = array.reduce(function(karmashek, currentValue) {
//   console.log(karmashek, currentValue);
//   return karmashek + currentValue;
// }, 10);

// console.log(result);

// const array = [
//   [10, 20, 30],
//   [100, 200, 300],
//   [1000, 2000, 3000],
// ];

// const concatArray = array.reduce(function(prevValue, currentValue) {
//   return prevValue.concat(currentValue);
// });

// console.log(concatArray);


// Object, delete user.age

// const user = {
//   firstName: 'Kayli',
//   secondName: 'Jhener',
//   age: 25,
//   eyesColor: 'blue',
//   haveChild: false,
//   email: 'kayli_jhener@gmail.com',
//   pets: ['cat', 'dog', 'parrot'],
//   cat: {
//     name: 'Barsyk',
//     age: 6,
//     color: 'Blue gray',
//   },
//   sayHello(value) {
//     console.log('hello!', value);
//   },
// };

// console.log(user);
// console.log(user.firstName);
// console.log(user.eyesColor);

// const userInfo = `Hello my name is ${user.firstName}. I have ${user.eyesColor} eyes color!`;
// console.log(userInfo);

// console.log(`My pet name is ${user.cat.name}`);

// user.pets.forEach(function(item) {
//   console.log(`I have a ${item}`);
// });

// user.haveChild = true;

// delete user.cat;
// delete user.firstName;
// delete user.pets;

// user.job = 'Disney';
// console.log(user);

// user.sayHello('some arguments');

// for

const user = {
  firstName: 'Kayli',
  secondName: 'Jhener',
  age: 25,
  eyesColor: 'blue',
  haveChild: false,
  email: 'kayli_jhener@gmail.com',
  pets: ['cat', 'dog', 'parrot'],
  cat: {
    name: 'Barsyk',
    age: 6,
    color: 'Blue gray',
  },
  sayHello(value) {
    console.log('hello!', value);
  },
};

for (let key in user) {
  // user.firstName;
  // user.secondName;

  // user.key... // don't work, key is not appear in the user object
  console.log(key, user[key]);

  if (key === 'pets') {
    user[key].forEach(function(item) {
      console.log(`Pets here ${item}`);
    });
  }
}

// const users = [
//   {
//     name: "Artem",
//     age: 25,
//     email: "dffgh@dd.com",
//   },
//   {
//     name: "Anton",
//     age: 27,
//     email: "kjewf23@dd.com",
//   },
//   {
//     name: "Anna",
//     age: 20,
//     email: "jkewf000@dd.com",
//   },
//   {
//     name: "Kristina",
//     age: 23,
//     email: "dsjkwfekjbw122@dd.com",
//   },
// ];
