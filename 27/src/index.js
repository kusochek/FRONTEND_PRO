import Sum from "./components/Sum.js";
import $ from 'jquery';

const calculator = new Sum(10, 20);
console.log(calculator.sum());
console.log(calculator.sum());

const div = document.querySelectorAll('.block');

const block = $('.block');

block.css({
  opacity: 0.5,
  width: '300px',
});

// block.toggle('big');
// console.log(block);

// $('.block').animate({
//   opacity: 0.5,
//   width: '300px',
// }, 3000, () => console.log('finish'));


// ONLY NODE.JS
// console.log(global);

// import http from 'http';
// console.log(http);
