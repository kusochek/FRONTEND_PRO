// numOrStr = prompt('input number or string');
// console.log(numOrStr)

// if (numOrStr === null) {
//     console.log('ви скасували')
// } else if (numOrStr.trim() === '') {
//     console.log('Empty String');
// } else if (isNaN(+numOrStr)) {
//     console.log('number is Ba_NaN')
// } else {
//     console.log('OK!')
// }

// numOrStr = prompt('input number or string');
// console.log(isNaN(+numOrStr));

// switch (isNaN(+numOrStr) || numOrStr && numOrStr.trim()) {
//     case null:
//         console.log('ви скасували')
//         break;
//     case '':
//         console.log('Empty String')
//         break;
//     case true:
//         console.log(' number is Ba_NaN')
//         break;
//     default:
//         console.log('OK!')
// }

// let numOrStr = prompt('input number or string');
// console.log(numOrStr)

// How much will 2+2?
// The sun rises in the east?
// How much will 5 / 0 be?
// What color is the sky?
// What is the correct answer to the ultimate question of life, the universe and all that. (42)

// firstQuestion = +prompt('How much will 2 + 2?');
// secondQuestion = prompt('The sun rises in the east?');
// thirdQuestion = prompt('How much will 5 / 0 be?');
// fourthQuestion = prompt('What color is the sky?');
// fifthQuestion = +prompt('What is the correct answer to the ultimate question of life, the universe and all that?'); // random 42

// result = 0;

// if (firstQuestion === 4) {
//     // result = result + 10;
//     result += 10;
// } else {
//     console.log('Wrong!!!');
// }

// if (secondQuestion.toLowerCase().trim() === 'yes' || secondQuestion === '+') {
//     result += 10;
// }

// if (thirdQuestion.toLowerCase() === 'infinity' || thirdQuestion.toLowerCase() === 'can\'t devide by zero') {
//     result += 10;
// }

// if (fourthQuestion.toLowerCase() === 'blue') {
//     result += 10;
// }

// if (fifthQuestion === 42) {
//     result += 10;
// }

// alert(`Your result is ${result}/50`);


// Тернарный оператор 
// dishes = prompt('What would you want to eat today?').toLowerCase();

// order = '';

// if (dishes === 'beer') {
//     order = 'You need bring one liter of beer';
// } else if (dishes === 'salmon') {
//     order = 'You need to go to the chef and ask to cook salmon';
// } else {
//     order = 'You need to say that we don\'t have this dishes';
// }

// order = dishes === 'beer'
//     ? 'You need bring one liter of beer'
//     : 'You need to say that we don\'t have this dishes';

// order = dishes === 'beer'
//     ? 'You need bring one liter of beer'
//     : dishes === 'salmon'
//     ? 'You need to go to the chef and ask to cook salmon'
//     : 'You need to say that we don\'t have this dishes';

// console.log(order);


// while, do/while()
// debugger;
// count = 0;

// while (count < 10) {
//     count++;
//     console.log(count);
// }
// debugger;
// userAge = prompt('How old are you?');

// while (!userAge || isNaN(parseInt(userAge))) {
//     userAge = prompt('How old are you?');
// }

// console.log(parseInt(userAge));
// debugger;
// do {
//     userAge = prompt('How old are you?');
// } while (!userAge || isNaN(parseInt(userAge)));

// console.log(userAge);


// !!!!DON'T THAT!!!!! WARNING ERROR
// while (true) {   // !!!!DON'T THAT!!!!!
//     console.log(1);
//     if (true) break;
// }
// count = 0;

// while (true) {
//     count++;
//     console.log(count);
// }
// !!!!DON'T THAT!!!!! WARNING ERROR



// email === null || email === "" || email === 0

do {
    email = prompt('Please enter your email?');
    if (!email || email.length < 5) {
        console.log('Email must contain more then 5 characters!');
    }
    
    if (email.indexOf('@') === -1 || email[0] === '@' || email[email.length - 1] === '@') {
        console.log('Email must contain @ symbol and it\'s cannot be on the first and last place!');
    }
} while (!email || email.length < 5
    || email.indexOf('@') === -1 || email[0] === '@'
    || email[email.length - 1] === '@');

document.write(`
    <p>Your email: ${email}</p>
`);