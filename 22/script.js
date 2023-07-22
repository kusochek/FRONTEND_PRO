const parse = (response) => JSON.parse(response);

const controller = (method, action) => {
  const xml = new XMLHttpRequest();
  xml.open(method, action);
  xml.send();

  return new Promise((resolve, reject) => {
    xml.addEventListener('readystatechange', () => {
      if (xml.readyState === 4) {
        xml.status < 400 ? resolve(parse(xml.response)) : reject(xml.status);
      }
    });
  });
};

// controller('GET', 'json/animals.json')
//   .then((data) => {
//     data.animals.forEach((animal) => {
//       controller('GET', `json/${animal}.json`)
//         .then((animalData) => {
//           console.log(animalData.name);
//         })
//         .catch((err) => console.log(err));
//     })
//   })
//   .catch((err) => console.log(err));

// controller('GET', 'json/animals.json')
//   .then((data) => {
//     controller('GET', `json/${data.animals[0]}.json`)
//       .then((animalData) => {
//         console.log(animalData.name);
//       })
//       .then(() => {
//         controller('GET', `json/${data.animals[1]}.json`)
//           .then((animalData) => {
//             console.log(animalData.name);
//           })
//           .then(() => {
//             controller('GET', `json/${data.animals[2]}.json`)
//               .then((animalData) => {
//                 console.log(animalData.name);
//               })
//               .catch((err) => console.log(err));
//           })
//           .catch((err) => console.log(err));
//       })
//       .catch((err) => console.log(err));
//   })
//   .catch((err) => console.log(err));

// PROMISE ALL

// Promise.all([
//   controller('GET', 'json/dog.json'),
//   controller('GET', 'json/cat.json'),
//   controller('GET', 'json/fox.json'),
// ])
//   .then((data) => {
//     data.forEach(animal => {
//       console.log(animal.name);
//     })
//   })
//   .catch((err) => console.log(err));

// controller('GET', 'json/animals.json')
//   .then((data) => {
//     const wrapp = document.querySelector('.wrapp');
//     Promise.all(data.animals.map((animal) => controller('GET', `json/${animal}.json`)))
//       .then((data) => {
//         data.forEach((animal) => {
//           const p = document.createElement('p');
//           p.innerText = animal.name;

//           wrapp.append(p);
//         })
//       })
//       .catch((err) => console.log(err));
//   })
//   .catch((err) => console.log(err));

// PROMISE ALLSETTLED

// controller('GET', 'json/animals.json')
//   .then((data) => {
//     const wrapp = document.querySelector('.wrapp');
//     Promise.allSettled(data.animals.map((animal) => controller('GET', `json/${animal}.json`)))
//       .then((data) => {
//         data.forEach((promise) => {
//           if (promise.status === 'fulfilled') {
//             const p = document.createElement('p');
//             p.innerText = promise.value.name;

//             wrapp.append(p);
//           }
//         })
//       })
//       .catch((err) => console.log(err));
//   })
//   .catch((err) => console.log(err));

// PROMISE RACE

// controller('GET', 'json/animals.json')
//   .then((data) => {
//     const wrapp = document.querySelector('.wrapp');
//     Promise.race(data.animals.map((animal) => controller('GET', `json/${animal}.json`)))
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((err) => console.log(err));
//   })
//   .catch((err) => console.log(err));
