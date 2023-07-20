// XMLHttpRequest
// GET, POST, PUT, PATCH, DELETE
// const parse = (data) => JSON.parse(data);

// function requestData(method, URL, cb, cb2) {
//   const xml = new XMLHttpRequest();
//   xml.open(method, URL);
//   xml.send();

//   xml.addEventListener('readystatechange', () => {
//     if (xml.readyState === 4 && xml.status < 400) {
//       const response = parse(xml.response);
//       cb(response, cb2);
//     }
//   });
// }

// function renderFriends(response, cb) {
//   const wrapp = document.querySelector('.wrapp');

//   response.data.forEach((friend) => {
//     const div = document.createElement('div');
//     const image = document.createElement('img');
//     const h3 = document.createElement('h3');
//     const p = document.createElement('p');

//     div.classList.add('card');
//     p.classList.add('age');

//     image.src = friend.avatar;
//     h3.innerText = friend.name;
//     p.innerText = friend.age;

//     div.append(image, h3, p);
//     wrapp.append(div);
//   });
// };

// function renderFileA(response) {
//   console.log(response);
// }

// requestData("GET", 'request/fileB.json', renderFriends, renderFileA);
// requestData("GET", 'request/fileA.json', renderFileA);


// const parse = (data) => JSON.parse(data);

// function requestData(method, URL) {
//   const xml = new XMLHttpRequest();
//   xml.open(method, URL);
//   xml.send();

//   return new Promise((resolve, reject) => {
//     xml.addEventListener('readystatechange', () => {
//       if (xml.readyState === 4) {
//         xml.status < 400
//           ? resolve(parse(xml.response))
//           : reject([xml.statusText, xml.status]);
//       }
//     });
//   });

// };

// requestData('GET', 'request/fileA.json')
//   .then(data => data)
//   .then(data => {
//     console.log(data);
//     requestData('GET', 'request/fileB.json')
//       .then(princess => {
//         const wrapp = document.querySelector('.wrapp');

//         princess.data.forEach((friend, index) => {
//           const div = document.createElement('div');
//           const image = document.createElement('img');
//           const h3 = document.createElement('h3');
//           const h4 = document.createElement('h4');
//           const p = document.createElement('p');

//           div.classList.add('card');
//           p.classList.add('age');

//           image.src = friend.avatar;
//           h3.innerText = friend.name;
//           p.innerText = friend.age;
//           h4.innerText = `Favorite fruit: ${data.data.fruits[index]}`

//           div.append(image, h3, h4, p);
//           wrapp.append(div);
//         });
//       })
//   })
//   .catch((err) => console.log(err.join(' ')));


fetch('https://jsonplaceholder.typicode.com/todos/2')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // const wrapp = document.querySelector('.wrapp');

    // data.forEach(todo => {
    //   const p = document.createElement('p');

    //   p.innerText = todo.title;
    //   wrapp.append(p);
    // });
  });
