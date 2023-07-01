// Global obj
// DOM - document object model
// BOM

// const document = {
//   doctype: {
//     html: {
//       head: {
//         meta: {},
//         title: 'Lesson 16',
//       },
//       body: {
//         h1: {},
//         h1: {},
//         ul: {
//           li:
//         }
//       }
//     }
//   }
// };

// console.dir(document);


// children, first- lastElementChild, previous- nextElementSibling, parentElement (parentNode)
// nodeName, tagName

// console.log(document.head.nextElementSibling);
// console.dir(document.body.parentNode);



// getElementsByTagName
// getElementsByClassName
// getElementById
// querySelector
// querySelectorAll

// console.log(document.getElementsByTagName('ul')[0].children[0].innerText);
// console.log(document.getElementsByTagName('h1'));
// console.log(document.getElementsByClassName('title'));
// console.log(document.getElementById('third').outerText);

// console.log(document.querySelector('h1.title'));
// console.log(document.querySelector('#third'));
// console.dir(document.querySelector('ul'));

// document.querySelectorAll('li').forEach(item => {
//   console.log(item);
//   item.innerText = 10;
// })

// Attribute: hasAttribute, getAttribute, setAttribute, removeAttribute
// inner....
// outer

// const image = document.querySelector('img');
// console.log(image.hasAttribute('data-testid'));

// image.setAttribute('src', 'https://hips.hearstapps.com/hmg-prod/images/cute-cat-photos-1593441022.jpg?crop=1.00xw:0.753xh;0,0.153xh&resize=1200:*');
// image.setAttribute('width', '200');
// image.width = 200;



// createElement
// append, prepend, before, after
// style
// getComputedStyle
// class (add/remove, containe, toggle)

// setTimeout
// setInterval
// 3*3 changeColor Element

// `rgb(${}, ${}, ${})`

function getRandomNumber() {
  return Math.floor(Math.random() * (255 - 0 + 1) + 0);
}

function generateRGBColor() {
  return `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`
}

const wrapp = document.querySelector('#wrapp');
wrapp.classList.add('grid-wrapp');

// const image = document.createElement('img');
// image.src = 'https://hips.hearstapps.com/hmg-prod/images/cute-cat-photos-1593441022.jpg?crop=1.00xw:0.753xh;0,0.153xh&resize=1200:*';

// wrapp.before(image);

for (let i = 1; i < 10; i++) {
  const div = document.createElement('div');
  const innerDiv = document.createElement('div');

  div.classList.add('grid');
  innerDiv.innerText = i;
  innerDiv.classList.add('inner-div');
  
  div.style.backgroundColor = generateRGBColor();
  innerDiv.style.backgroundColor = 'white';

  setInterval(() => {
    div.style.backgroundColor = generateRGBColor();
  }, 1000);
  
  div.append(innerDiv);
  wrapp.append(div);
}



// matches, closest
// remove
// cloneNode
// events
