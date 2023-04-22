// **************
// За допомогою prompt запитати ім'я користувача.
// За допомогою alert вивести "Hello, John! How are you?"
// Де John це те, що ввів користувач
// userName = prompt('What is your name?');
// alert('Hello, ' + userName + '! How are you?');


// new Date()
// currentDate = new Date();
// currentYear = currentDate.getFullYear();
// birthYear = prompt('What is your year of birth?');
// age = currentYear - birthYear;
// console.log('Hi! ' + 'I\'m ' + age + ' years old!');

// x = null;
// y = undefined;
// console.log(x, y);

// Перетворення типів
// Явне перетворення
// Не явне перетворення

// to Number
// apples = prompt('How many apples do you have?');
// console.log(+apples);
// parseInt
// grapes = prompt('How many grapes do you have?');
// grapesToNumber = parseInt(grapes);
// console.log(grapesToNumber);
// parseFloat
// melons = prompt('How many melons do you have?');
// melonsToNumber = parseFloat(melons);
// console.log(melonsToNumber);

// minus = parseFloat('100x') - '43';
// multiply = '100' * '43';
// console.log(minus, multiply);



// to String
// value = 234;
// valueToString = value.toString();
// console.log(valueToString);


// to Boolean

// Все строки перетворюються в TRUE, окрім пустої ʼʼ - FALSE
// Boolean(' ') // true
// Boolean('dddd') // true
// Boolean('') // false

// Все числа перетворюються в TRUE, окрім 0 - FALSE
// Boolean(0) // false
// Boolean(10) // true
// Boolean('0') // true

// OTHER
// Boolean(null) // false
// Boolean(undefined) // false

// value = null;
// console.log(Boolean(value));
// console.log(!value);

// someValue = prompt('Please put some value?');
// console.log(!someValue);


// shablon string
// userName = prompt('What is your name?');
// age = prompt('How old are you?');
// alert('Hello, ' + userName + '! How are you?');
// alert(`Hello, ${userName}! How are you? You are ${age} years old!`);


// document.write()
// document.write(`
//     <ul>
//         <li>1 item</li>
//         <li style="color: blue">2 item</li>
//         <li class="red-line">3 item</li>
//         <li>4 item</li>
//         <li>5 item</li>
//     </ul>
// `);

// firstName = prompt('What is your first name?');
// lastName = prompt('What is your last name?');
// age = prompt('How old are you?');

// document.write(`
//     <h1>CV</h1>
//     <h2>${firstName} ${lastName}</h2>
//     <h3>Age: ${age}</h3>
// `);

// STRING METHODS
// trim()
// replace()/replaceAll()
// toLowerCase()/toUpperCase()
// string[], string.length
// indexOf()

// string = '   Hello world!    ';
// hello = 'Hello';
// trimString = string.trim(); // 'Hello world!'
// console.log(string.replaceAll(' ', '')); // 'Helloworld!'
// console.log(string.replaceAll('H', '🥥')); // 'Helloworld!'
// console.log(string.replace(' ', '')); // '  Hello world!   '
// console.log(string.toUpperCase());
// console.log(string.toLowerCase());
// hello.toUpperCase();

// value = 'I love motocycles';
// console.log(value[value.length - 1]);
// console.log(value.indexOf('.')); // -1
// console.log(value.indexOf('l')); // 2

// userName = prompt('What is your name?');
// firstLetterUserName = userName[0].toUpperCase();
// otherFirstName = userName.slice(1, userName.length);
// editUserName = `${userName[0].toUpperCase()}${userName.slice(1, userName.length)}`;
// console.log(userName, editUserName);



// NUMBER METHODS
// Math.floor
// Math.ceil
// Math.round
// Math.trunc
// %
// NaN - Not A Number
// typeof 


value = 10.536789;
console.log(Math.floor(value)); // 10
console.log(Math.ceil(value)); // 11
console.log(Math.round(value)); // 11
console.log(Math.trunc(value)); // 10


console.log(6%4);
console.log(typeof value);

