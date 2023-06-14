// function foo() {
// 	console.log(this);
// }

// foo();

// const obj = {
//   name: 'Sasha',
//   getThis() {
//     console.log(this);
//   },
// }

// Array.prototype.someFoo = function() {
//   console.log(this);
// };

// [1,2,3,4].someFoo();

// Object.assign()
// spread/rest

// const obj_1 = {
//   a: 10,
//   b: 20,
//   k: {
//     x: 100,
//     y: 200,
//     p: {
//       x: 300,
//     }
//   }
// };
// const obj_2 = {
//   c: 30,
//   d: 40,
//   y: ['cat', 'dog']
// };
// const obj_3 = {
//   a: 50,
//   f: 60,
//   ee: function () {
//     console.log('here');
//   }
// };
// const obj_4 = {
//   name: 'Masha',
// };

// function assignObject() {
//   console.log(arguments);
//   for (let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
//   // return Object.assign({}, obj1, obj2, obj3);
// };

// function assignObject(...obj) {
//   return Object.assign({}, ...obj);
// };


// const assignedObj = assignObject(obj_1, obj_2, obj_3, obj_4);

// function deepCopy(obj) {
//   // debugger;s
//   let newObj = {};

//   for (let key in obj) {
//     if (typeof obj[key] === 'object') {
//       newObj = { ...newObj, [key]: deepCopy(obj[key]) };
//     } else {
//       newObj = { ...newObj, [key]: obj[key] };
//     }
//   }

//   return newObj;
// }

// console.log(deepCopy(assignedObj));

// const a = [10, 20, 30];
// const b = ['Sasha', 'Masha', 'Luba'];
// const c = ['Denys', 'Alex', 'Taras', ...a];

// const concatArr = [...a, ...b, ...c,];

// console.log(concatArr);


// const pet = {
//   name: 'Skali',
//   type: 'dog',
//   age: 12,
// };

// const user = {
//   firstName: 'Olha',
//   secondName: 'Jhuk',
//   age: 25,
//   pet: { ...pet },
// };

// const newObj = {
//   ...user,
//   secondName: 'Abdula',
//   pet: { ...user.pet, name: 'Bagira', },
//   isMarried: true,
// };

// console.log(user, newObj);



// const obj = {
// 	name: "Pasha",
// 	age: 29,
// 	favColor: "red",
// };
// const pet = {
// 	petName: "Alisa",
// 	category: "dog",
// 	age: 4,
// };

// // const objCopy = Object.assign({}, obj);
// const objCopy = { ...obj, ...pet };

// const animalsCopy = [ ...animals ];

// console.log(numbers);
// console.log(objCopy);

// const asignArr = numbers.concat(animals);

// console.log(asignArr);


// let kitchenProducts = [
// 	{
// 		type: 'grater',
// 		price: 10
// 	},
// 	{
// 		type: 'pastry-bag',
// 		price: 25
// 	},
// 	{
// 		type: 'scale',
// 		price: 5
// 	},
// 	{
// 		type: 'whisk',
// 		price: 15
// 	}
// ];

// const cosmeticsProducts = [
// 	{
// 		type: 'blush',
// 		price: 10
// 	},
// 	{
// 		type: 'perfume',
// 		price: 25
// 	}
// ];


// kitchenProducts.renderProducts("kitchen");
// cosmeticsProducts.renderProducts("cosmetics");
// deviceProducts.renderProducts("devices");



// Object prototype
// Object.create()

// const Parent = {
//   firstName: 'Pasha',
//   secondName: 'Dubrovskii',
//   gender: 'male',
//   age: 45,
//   money: 16000,
//   getInfo() {
//     return `Hello! My name is ${this.firstName} ${this.secondName}. I'm ${this.age} years old!`;
//   },
// };

// const AnotherChild = {
//   firstName: 'Katya',
//   secondName: 'Dubrovskii',
//   gender: 'female',
//   age: 11,
//   money: 16000,
// };

// AnotherChild.getInfo();

// const Child = Object.create(Parent);
// Child.firstName = 'Katya';
// Child.gender = 'female';
// Child.age = 11;

// console.log(Child);
// console.log(Child.getInfo());



// Function-constructor

// function Parent(firstName, secondName, age, gender) {
//   this.firstName = firstName;
//   this.secondName = secondName;
//   this.age = age;
//   this.gender = gender;

//   this.getInfo = function () {
//     return `Hello! My name is ${this.firstName} ${this.secondName}. I'm ${this.age} years old!`;
//   };
// }

// const papa = new Parent('Denys', 'Lysenko', 27, 'male');
// const mama = new Parent('Liza', 'Lysenko', 26, 'female');
// console.log(papa.getInfo());
// console.log(mama.getInfo());

const users = [
  {
    name: "Dasha",
    age: 5,
    color: "red",
  },
  {
    name: "Kolya",
    age: 10,
    color: "blue",
  },
  {
    name: "Milka",
    age: 8,
    color: "pink",
  },
];

function User(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;

  this.renderUsers = function () {
    return `
      <ul>
        <li>Name: ${this.name}</li>
        <li>Name: ${this.age}</li>
        <li>Name: ${this.color}</li>
      </ul>
    `;
  };
};

users
  .map(function (item) {
    return new User(item.name, item.age, item.color);
  })
  .forEach(function (item) {
    console.log(item);
    document.write(item.renderUsers());
  });
