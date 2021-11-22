const mySnake = document.querySelector('.snake');
// const dot = document.querySelector('.dot');
const grid = document.querySelector('.gameGrid');
let dot = document.createElement('div');
dot.className = 'dot';
grid.appendChild(dot);
dot.style.borderRadius = '50%';
dot.style.backgroundColor = 'rgb(143, 61, 105)';

// dot.getBoundingClientRect();
console.log(dot.getBoundingClientRect());
// console.log(mySnake.getBoundingClientRect());
// possible function to move the dot
const moveDot = () => {
  // generate radom number btewwen 0 and 380, max px is 380 for dot.
  // let rand = Math.floor(Math.random() * 381);
  // console.log(rand + 'this is the random number');
  // let dotx = DOMRect.x;
  // console.log(dotx);
  // moves the dot to the right.
  // dot.style.left = parseInt(dot.style.left) + rand + 'px';
  // if(dot.style.left === ){
  // }
  // moves the dot to the right
  // dot.style.left = parseInt(dot.style.left) - position + 'px';
  // parseInt(dot.style.left) + Math.random() * (10 - 1) + 1 + 'px';
  // dot.style.left = parseInt(dot.style.left) + position + 'px';
  // dot.style.left = parseInt(dot.style.left) - position + 'px';
};

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
  if (interval) {
    clearInterval(interval);
  }
  switch (e.key) {
    case 'ArrowLeft':
      interval = setInterval(() => {
        mySnake.style.left = parseInt(mySnake.style.left) - position + 'px';
        // console.log(mySnake.getBoundingClientRect());
        if (mySnake.style.left === '-200px') {
          mySnake.style.left = parseInt(mySnake.style.left) + position + 'px';
          mySnake.style.left = 0;
          mySnake.style.top = 0;
          alert('you lost');
          clearInterval(interval);
        } else if (
          // if the snake and dot touch
          mySnake.offsetLeft - 1 === dot.offsetLeft &&
          mySnake.offsetTop - 1 === dot.offsetTop
        ) {
          console.log('they touched');
          // dot.style.left = parseInt(dot.style.left) + position + 'px';
          // dot.style.top = parseInt(dot.style.top) + position + 'px';
          // dot.style.left = parseInt(dot.style.left) + 'px';
          // dot.style.top = parseInt(dot.style.top) + 'px';
          // console.log(dot.style.top);
          // console.log(dot.style.left);

          // moveDot();
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
});
// console.log(dot.getBoundingClientRect());
