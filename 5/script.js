// HW 10
// Using PROMPT ask user what does he want to do  (+ - / *). Ask until then he will put correct answer.
// Asking how much operands does he want to use. It should be a NUMBER more then 1 and less then 7. Ask until then he will put correct answer.
// Asking every operand in user. It should be a NUMBER. Ask until then he will put correct answer.
// Using ALERT or console.log display final result of action (+ - / *).
// debugger;
// do {
//     operation = prompt('Choose operation (+ - * /)');
// } while (operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/');

// do {
//     countOfOperations = parseInt(prompt('How much numbers?'));
// } while (countOfOperations > 7 || countOfOperations < 2 || isNaN(countOfOperations));

// count = 0;
// result = 0;

// do {
//     count++;

//     do {
//         number = parseInt(prompt('Put number?', '10'));
//     } while (isNaN(number));

//     switch (operation) {
//         case '+':
//             result += number;
//             break;
//         case '-':
//             result = count === 1 ? number : result - number;
//             break;
//         case '*':
//             if (count === 1) result = 1;
//             result *= number;
//             break;
//         case '/':
//             result = count === 1 ? number : result / number;
//             break;
//     }

// } while (count < countOfOperations);
// debugger;

// result = 0;

// for (i = 1; i <= countOfOperations; i++) {
//     do {
//         number = parseInt(prompt('Put number?', '10'));
//     } while (isNaN(number));

//     switch (operation) {
//         case '+':
//             result += number;
//             break;
//         case '-':
//             result = i === 1 ? number : result - number;
//             break;
//         case '*':
//             if (i === 1) result = 1;
//             result *= number;
//             break;
//         case '/':
//             result = i === 1 ? number : result / number;
//             break;
//     }
// }

// alert(result);


// FOR LOOP
// debugger;
// for (i = 0; i < 10; i++) {
//     console.log(i);
// }
// debugger;
// city = 'Buenos Aires'; // Buenos🌺Aires
// newCity = '';

// for (i = 0; i < city.length; i++) {
//     // console.log(i);
//     // console.log(city[i]);
//     // newCity = city[i] === ' ' ? '🌺' : city[i];
//     // newCity = city[i] === ' ' ? `${newCity}🌺` : `${newCity}${city[i]}`; // DONT'T DO THIS SHIT
//     // newCity += city[i] === ' ' ? '🌺' : city[i];

//     if (city[i] === ' ') {
//         newCity += '🌺'
//     } else {
//         newCity += city[i];
//     }
// }

// console.log(newCity);


// factorial
// Ввести с клавиатуры a и b, где а меньше b (проверку написать кодом). 
// Запустить цикл перебора от a до b с шагом h (ввод с клавиатуры). 
// Посчитать сумму факториалов* чисел которые попадаются во время перебора.

// !6 = 1 * 2 * 3 * 4 * 5 * 6

// do {
//     a = parseInt(prompt('Enter first number?')); // 2
// } while (isNaN(a) || a < 1);

// do {
//     b = parseInt(prompt('Enter second number?')); // 7
// } while (isNaN(b) || b < a);

// do {
//     h = parseInt(prompt('Enter increment?')); // 2
// } while (isNaN(h) || h > b - a || h <= 0);

// 2 4 6 
// !2 = 1 * 2
// !4 = 1 * 2 * 3 * 4
// !6 = 1 * 2 * 3 * 4 * 5 * 6

// !2 + !4 + !6
// debugger;

// for (sum = 0; a <= b; a += h) {
//     console.log(`Factorial of number: ${a}`);
//     factorial = 1;

//     for (i = 1; i <= a; i++) {
//         console.log(i);
//         factorial *= i;
//     }

//     console.log(`Factorial result = ${factorial}`);
//     sum += factorial;
//     console.log(`Sum of factorial ${sum}`);
// }


// get index
// get index with length
// set some biggest index
// edit index
// for array
// string, number, boolean, null, undefined, array

// array = [10, 'Hello!', true, null, undefined, [1, 2, 3, 4]];
// fruit = ['apple', 'peach', 'tomato', 'potato', 'banana'];
// fruit2 = fruit.slice();

// console.log(fruit2[0]);
// console.log(fruit);
// someFruit = fruit[7];
// console.log(someFruit);
// console.log(fruit[fruit.length - 1]);

// newFruit = fruit.slice(1, 3);
// console.log(newFruit);
// spliceFruit = fruit.splice(1, 3);
// console.log(spliceFruit);
// console.log(fruit);
// console.log(fruit2);

// delete fruit[2];
// fruit[2] = 'orange';
// fruit[100] = 'cucumber';

// newValue = fruit.push('orange', 'apple', [1,2,3,4]);
// fruit.pop();
// fruit.unshift('orange');
// fruit.shift();
// console.log(fruit);
// console.log(newValue);

// for (i = 0; i < fruit.length; i++) {
//     console.log(fruit[i]);
//     fruit[i] = `${fruit[i][0].toUpperCase()}${fruit[i].slice(1)}`;
// }
// console.log(fruit);