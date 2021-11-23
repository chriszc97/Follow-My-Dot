const mySnake = document.querySelector('.snake');
const dot = document.querySelector('.dot');
const grid = document.querySelector('.gameGrid');
let score = 0;
document.querySelector('nav').innerText = score;
let position = 10;
let interval = null;
let winnerCheck = (num) => {
  if (num === 10) {
    alert('You got 10 point, You win.');
    clearInterval(interval);
  }
};
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
  switch (e.keyCode) {
    case 37:
      interval = setInterval(() => {
        mySnake.style.left = parseInt(mySnake.style.left) - position + 'px';
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
          dot.style.left = parseInt(dot.style.left) + position + 'px';
          score++;
          document.querySelector('nav').innerText = score;
          console.log(score);
        }
        if (winnerCheck(score)) {
          mySnake.style.left = 0;
          mySnake.style.top = 0;
        }
      }, 100);
      break;

    case 39:
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
          score++;
          console.log(score);
          console.log('they touched ');
          dot.style.top = parseInt(dot.style.top) + position + 'px';
          document.querySelector('nav').innerText = score;
        } else if (winnerCheck(score)) {
          mySnake.style.left = 0;
          mySnake.style.top = 0;
        }
      }, 100);
      break;
    case 38:
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
          dot.style.top = parseInt(dot.style.top) + position + 'px';
          dot.style.left = parseInt(dot.style.left) + position + 'px';
          score++;
          document.querySelector('nav').innerText = score;

          console.log(score);
          console.log('they touched ');
        } else if (winnerCheck(score)) {
          mySnake.style.left = 0;
          mySnake.style.top = 0;
          // return;
          // clearInterval(interval);
        }
      }, 100);
      break;
    case 40:
      interval = setInterval(() => {
        mySnake.style.top = parseInt(mySnake.style.top) + position + 'px';
        if (mySnake.style.top === '200px') {
          mySnake.style.top = parseInt(mySnake.style.top) + position + 'px';
          console.log('down limit');
          mySnake.style.left = 0;
          mySnake.style.top = 0;
          alert('you lost');
          clearInterval(interval);
        } else if (
          mySnake.offsetLeft - 1 === dot.offsetLeft &&
          mySnake.offsetTop - 1 === dot.offsetTop
        ) {
          dot.style.left = parseInt(dot.style.left) - position + 'px';
          dot.style.top = parseInt(dot.style.top) + position + 'px';
          score++;
          document.querySelector('nav').innerText = score;
          console.log(score);
          console.log('they touched ');
        } else if (winnerCheck(score)) {
          mySnake.style.left = 0;
          mySnake.style.top = 0;
          // return;
          // clearInterval(interval);
        }
        // } else if (dot.style.left >= '10px') {
        //   alert('you lost');
      }, 100);
      break;
  }
});
// console.log(dot.offsetTop + 'the top dot');
// console.log(dot.offsetLeft + ' the left dot');

// console.log(dot.getBoundingClientRect());
