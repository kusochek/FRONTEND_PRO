// XMLHttpRequest
// GET, POST, PUT, PATCH, DELETE
const parse = (data) => JSON.parse(data);

function requestData(method, URL, cb) {
  const xml = new XMLHttpRequest();
  xml.open(method, URL);
  xml.send();

  xml.addEventListener('readystatechange', () => {
    if (xml.readyState === 4 && xml.status < 400) {
      const response = parse(xml.response);
      cb(response);
    }
  });
}

function renderFriends(response) {
  const wrapp = document.querySelector('.wrapp');

  response.data.forEach((friend) => {
    const div = document.createElement('div');
    const image = document.createElement('img');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    div.classList.add('card');
    p.classList.add('age');

    image.src = friend.avatar;
    h3.innerText = friend.name;
    p.innerText = friend.age;

    div.append(image, h3, p);
    wrapp.append(div);
  });
};

function renderFileA(response) {
  console.log(response);
}

requestData("GET", 'request/fileB.json', renderFriends);
requestData("GET", 'request/fileA.json', renderFileA);


// console.log('Meow!');

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
