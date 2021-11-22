const mySnake = document.querySelector('.snake');
const dot = document.querySelector('.dot');

// possible function to move the dot
const moveDot = () => {
  // moves the dot tp the right.
  dot.style.left = parseInt(dot.style.left) + position + 'px';
};

// let dot = document.createElement('div');
// dot.className = 'dot';
// document.querySelector('.gameGrid').appendChild(dot);
// dot.style.backgroundColor = 'rgb(70,108,90)';
// dot.style.borderRadius = '50%';
// dot.top = '100px';
// dot.left = '100px';

let position = 10;
let interval = null;

window.addEventListener('load', () => {
  mySnake.style.position = 'relative';
  mySnake.style.left = 0;
  mySnake.style.top = 0;
  dot.style.position = 'relative';
  dot.style.left = 0;
  dot.style.top = 0;
});

document.addEventListener('keydown', (e) => {
  //   console.log(mySnake.style.left + 'the left of snake');
  //   console.log(mySnake.style.top + 'the top of snake');
  //   console.log(dot.style.left + 'the left of dot');
  //   console.log(dot.style.top + 'the top of dot');

  if (interval) {
    clearInterval(interval);
  }
  switch (e.key) {
    case 'ArrowLeft':
      interval = setInterval(() => {
        mySnake.style.left = parseInt(mySnake.style.left) - position + 'px';
        if (mySnake.style.left === '-200px') {
          mySnake.style.left = parseInt(mySnake.style.left) + position + 'px';
          mySnake.style.left = 0;
          mySnake.style.top = 0;
          alert('you lost');
          clearInterval(interval);
        } else if (
          mySnake.offsetLeft - 1 === dot.offsetLeft &&
          mySnake.offsetTop - 1 === dot.offsetTop
        ) {
          console.log('they touched');
          // dot.style.left = parseInt(dot.style.left) + position + 'px';
          // dot.style.top = 100;
          moveDot();
        }
      }, 100);
      break;

    case 'ArrowRight':
      interval = setInterval(() => {
        mySnake.style.left = parseInt(mySnake.style.left) + position + 'px';
        if (mySnake.style.left === '200px') {
          mySnake.style.left = parseInt(mySnake.style.left) - position + 'px';
          console.log('right limit');
          mySnake.style.left = 0;
          mySnake.style.top = 0;
          alert('you lost');
          clearInterval(interval);
        } else if (
          mySnake.offsetLeft - 1 === dot.offsetLeft &&
          mySnake.offsetTop - 1 === dot.offsetTop
        ) {
          console.log('they touched ');
        }
      }, 100);
      break;
    case 'ArrowUp':
      interval = setInterval(() => {
        mySnake.style.top = parseInt(mySnake.style.top) - position + 'px';
        if (mySnake.style.top === '-200px') {
          mySnake.style.top = parseInt(mySnake.style.top) + position + 'px';
          console.log('up limit');
          mySnake.style.left = 0;
          mySnake.style.top = 0;
          alert('you lost');
          clearInterval(interval);
        } else if (
          mySnake.offsetLeft - 1 === dot.offsetLeft &&
          mySnake.offsetTop - 1 === dot.offsetTop
        ) {
          console.log('they touched ');
        }
      }, 100);
      break;
    case 'ArrowDown':
      interval = setInterval(() => {
        mySnake.style.top = parseInt(mySnake.style.top) + position + 'px';
        if (mySnake.style.top === '200px') {
          mySnake.style.top = parseInt(mySnake.style.top) - position + 'px';
          console.log('down limit');
          mySnake.style.left = 0;
          mySnake.style.top = 0;
          alert('you lost');
          clearInterval(interval);
        } else if (
          mySnake.offsetLeft - 1 === dot.offsetLeft &&
          mySnake.offsetTop - 1 === dot.offsetTop
        ) {
          console.log('they touched ');
        }
      }, 100);
      break;
  }
  //   console.log(dot.offsetTop + ' dot top');
  //   console.log(dot.offsetLeft + ' dot left');
  //   console.log(mySnake.offsetTop + ' snake top');
  //   console.log(mySnake.offsetLeft + ' snake left');
});
// console.log(dot.offsetTop);
// console.log(dot.offsetLeft);
// console.log(mySnake.offsetTop);
// console.log(mySnake.offsetLeft);
// console.log(dot.style.left);
// console.log(dot.top);
// console.log(mySnake.position.left);
// console.log(dot.position.left);
// console.log(dot.position.top);
// Make the snake a stack, for every dot it eats the snake's body will increase its stack.

//stack =>
//let snakeSizeStack = [{dot: x: 0, y: 0}, ]

console.log(mySnake.offsetTop + ' snake top');
console.log(mySnake.offsetLeft + ' snake left');
console.log(dot.offsetTop + ' dot top');
console.log(dot.offsetLeft + ' dot left');
// console.log(mySnake.offsetRight + ' snake top');
// console.log(mySnake.offsetBottum + ' snake left');
