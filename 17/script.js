// events

// onmouseenter
// onmouseleave
// onmouseover
// onmouseout
// onmousemove

// const block = document.querySelector('.block');

// block.onmouseenter = () => console.log('mouseenter');
// block.onmouseleave = () => console.log('mouseleave');
// block.onmouseover = () => console.log('mouseover');
// block.onmouseout = () => console.log('mouseout');
// block.onmousemove = () => console.log('mousemove');


// onclick
// onmousedown
// onmouseup
// ondblclick
// oncontextmenu
// const block = document.querySelector('.block');

// block.onclick = () => console.log('onclick');
// block.onmousedown = () => console.log('onmousedown');
// block.onmouseup = () => console.log('onmouseup');
// block.ondblclick = () => console.log('ondblclick');
// block.oncontextmenu = () => console.log('oncontextmenu');


// drag and drop
// const block = document.querySelector(".block");

// let x = null;
// let y = null;

// let isBlockActive = false;

// block.onmousedown = (e) => {
//   x = e.screenX;
//   y = e.screenY;

//   isBlockActive = true;
// };

// block.onmousemove = (e) => {
//   if (isBlockActive) {
//     let _x = e.screenX;
//     let _y = e.screenY;
  
//     const diffX = _x - x;
//     const diffY = _y - y;
  
//     block.style.left = !block.style.left ? `${diffX}px` : `${parseInt(block.style.left) + diffX}px`;
//     block.style.top = !block.style.top ? `${diffY}px` : `${parseInt(block.style.top) + diffY}px`;
  
//     x = _x;
//     y = _y;
//   };
// };

// block.onmouseup = () => {
//   isBlockActive = false;
// };


// keypress, keydown, keyup
// const block = document.querySelector(".block");

// const STEP = 10;

// document.addEventListener('keypress', e => {
//   console.log('keypress', e.keyCode);
// });

// const operations = {
//   37: block => block.style.left = !block.style.left ? `-${STEP}px` : `${parseInt(block.style.left) - STEP}px`,
//   38: block => block.style.top = !block.style.top ? `-${STEP}px` : `${parseInt(block.style.top) - STEP}px`,
//   39: block => block.style.left = !block.style.left ? `${STEP}px` : `${parseInt(block.style.left) + STEP}px`,
//   40: block => block.style.top = !block.style.top ? `${STEP}px` : `${parseInt(block.style.top) + STEP}px`,
// };

// function setStepToBlock(e) {
//   operations[e.keyCode](block);
// };

// document.addEventListener('keydown', setStepToBlock);

// document.removeEventListener('keydown', setStepToBlock);

// document.addEventListener('keyup', e => {
//   console.log('keyup', e.keyCode);
// });



// form, e.preventDefault();

const firstNameInput = document.querySelector('#firstName');
const lastNameInput =  document.querySelector('#lastName');
const ageInput =  document.querySelector('#age');

const form = document.querySelector('#submit-form');

form.addEventListener('click', (e) => {
  // e.preventDefault();
  const userData = {
    [firstNameInput.name]: firstNameInput.value,
    [lastNameInput.name]: lastNameInput.value,
    [ageInput.name]: ageInput.value,
  };

  console.log(userData);
});
