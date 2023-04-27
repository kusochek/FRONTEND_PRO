// Створити скрипт для додавання, віднімання, множення та поділу двох чисел та виведення результатів.
// Користувач вводить два числа через два промпти, і повідомлення виводиться алертом з таким результатом:
// Користувач ввів 2 і 2:

// firstNumber = +prompt('Please enter first number?');
// secondNumber = +prompt('Please enter second number?');

// sum = firstNumber + secondNumber;
// minus = secondNumber - firstNumber;

// alert(`You resukt:
//     Sum: ${sum};
//     minus: ${minus}
// `);

// value = '12345';
// newValue = `${value[0]} ${value[1]} ....`;
// newValue = value.toString().replaceAll('', ' ').trim();


// ===, ==, >, <, >=, <=, !=, !==
// == - не строге
// console.log('Hello' == 'Hello');
// console.log('Hello' == 'hello');
// console.log(true == !!'true');
// console.log(false == 0);
// console.log(true == 1);
// console.log(null == 0);

// // === - строге порівняння
// console.log(false === 0);
// console.log(true === 1);
// console.log(null === 0);
// console.log('10' === 10);

// >, <, >=, <=
// console.log(5 > 10);
// console.log(15 > 10);
// console.log(15 >= 15);
// console.log(15 <= 15);

// firstNameCurrent = prompt('What is your name?');
// nameOfUserBestFriends = prompt('What is name of yor best friend?');

// console.log(firstNameCurrent.length === nameOfUserBestFriends.length);

// console.log('Hello' !== 'hello');
// console.log(true !== false);



// &&, ||
// && - AND
// if all values are true it return the last one
// or first false value

// || - OR
// first true value
// if all values are false return the last one


// value = 'Hello' && 'Privit' && 10 && 0 && true;
// console.log(value);
// debugger;
// value = '' || 0 || false;
// console.log(value);


// if else
// debugger;
// bread = 'Baton, ukrAinskii, Borodianskii';
// basket = null;

// if (bread.toLowerCase().indexOf('Ukrainskii'.toLowerCase()) !== -1) {
//     basket = 'Ukrainskii';
// } else if (!bread) { // bread === ''
//     alert('There are any bread in this shop!');
// } else {
//     basket = bread;
// }

// console.log(basket);

// string = 'abcdefad';
// console.log(string.indexOf('ad'));

// +=, -=, ++, --
// milk = 5;
// basket = 5;

// if (milk) {
//     // basket = basket + 1; // !!!!DON'T USE!!!!
//     // basket += 10;
//     basket++;
// }
// console.log(basket);


// example with check email
// email = prompt('Please put valid email!');

// required
// @ must appear in email
// @ cannot be on the start of string
// @ cannot be on the end of string

// if (!email) {
//     console.log('Email is required!');
// } else if (email.indexOf('@') === -1) {
//     console.log('Email must contain one @!');
// } else if (email[0] === '@') {
//     console.log('@ cannot be on the start of string!');
// } else if (email[email.length - 1] === '@') {
//     console.log('@ cannot be on the end of string!');
// } else {
//     console.log(`Nice work! Your email ${email} is perfect!`);
// }



// dictionary
// colors

color = prompt('Input some color?');

// if (color.toLowerCase() === 'red') {
//     console.log('Червоний');
// } else if (color.toLowerCase() === 'blue') {
//     console.log('Блакитний');
// } else if (color.toLowerCase() === 'green') {
//     console.log('Зелений');
// } else if (color.toLowerCase() === 'purple') {
//     console.log('Фіолетовий');
// } else {
//     console.log('Я не знаю, що це за колір!');
// }


// switch...case
switch (color.toLowerCase()) {
    case 'red':
        console.log('Червоний');
        break;
    case 'blue':
        console.log('Блакитний');
        break;
    case 'green':
        console.log('Зелений');
        break;
    case 'purple':
        console.log('Фіолетовий');
        break;
    default:
        console.log('Я не знаю, що це за колір!');
}
