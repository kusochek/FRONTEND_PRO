// let amount = 100;

// const obizianka = new Promise((resolve, reject) => {
//   amount >= 200
//     ? resolve('I have enough money. Please take it!')
//     : reject('I don\'t have enough money!');
// });

// obizianka
//   .then(
//     (mssg) => {
//       console.log(mssg);
//       return ['Let\'s go to the bar!', 'I like Naprosseko.'];
//     },
//     (error) => {
//       console.log(error);
//       return Promise.reject('Please ask me one month later!')
//     },
//   )
//   .then(
//     (mssg) => {
//       console.log(mssg.join(' '));
//       return 'We gonna drunk!'
//     },
//     (err) => {
//       console.log(err);
//       amount += 50;

//       return amount >= 200
//         ? 'I have enough money. Please take it!'
//         : Promise.reject('I don\'t have money! I still love you!')
//     },
//   )
//   .then(
//     (mssg) => {
//       console.log(mssg);
//     },
//     (err) => {
//       console.log(err);
//     },
//   );


const tickets = 70;

const concert = new Promise((resolve, reject) => {
  tickets >= 100 ? resolve(tickets) : reject(tickets);
});

concert
  .then(
    (tickets) => {
      return `Concert gonna be! ${tickets} tickets was sold out!`;
    },
    (err) => {
      console.log(`${err} tickets was sold out! Try to sell another tickets!`);
      return err >= 80
        ? `Students will buy ${100 - err}. Concert gonna be!`
        : Promise.reject(err);
    },
  )
  .then((mssg) => console.log(mssg))
  .catch((err) => console.log(`Concert canceled! ${err} tickets was sold out!`))
  .finally(() => console.log('P.S Concert by Poplavskii'));


