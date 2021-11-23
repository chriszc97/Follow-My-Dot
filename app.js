const mySnake = document.querySelector('.snake');
const dot = document.querySelector('.dot');
// score count
let score = 0;
document.querySelector('nav').innerText = score;

// The amount of px the snake will move per mili second
let position = 10;
let interval = null;

//function to check if the user has made ten points
let winnerCheck = (num) => {
  if (num === 10) {
    alert('You got 10 point, You win. Press the restart button to play again!');
    clearInterval(interval);
  }
};

// when the page loads, the postions will be reset.
window.addEventListener('load', () => {
  mySnake.style.position = 'relative';
  mySnake.style.left = 0;
  mySnake.style.top = 0;
  dot.style.position = 'relative';
  dot.style.left = 0;
  dot.style.top = 0;
});

// key down evnts to get arrow input, how we get our directions, the if(interval) resets the direction, allowing one direction at a time
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
          alert(
            "Oh No! You toched the border, no worries keep going! We're all winners."
          );
          clearInterval(interval);
        } else if (
          // if the snake and dot touch then move the dots "n" amount of px.
          mySnake.offsetLeft - 1 === dot.offsetLeft &&
          mySnake.offsetTop - 1 === dot.offsetTop
        ) {
          console.log('they touched');
          dot.style.left = parseInt(dot.style.left) + 40 + 'px';
          score++;
          document.querySelector('nav').innerText = score;
        }
        if (winnerCheck(score)) {
          // reset the dots after winning condition
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
          alert(
            "Oh No! You toched the border, no worries keep going! We're all winners here."
          );
          clearInterval(interval);
        } else if (
          mySnake.offsetLeft - 1 === dot.offsetLeft &&
          mySnake.offsetTop - 1 === dot.offsetTop
        ) {
          score++;
          console.log(score);
          console.log('they touched ');
          dot.style.top = parseInt(dot.style.left) + position + 'px';
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
          mySnake.style.left = 0;
          mySnake.style.top = 0;
          alert(
            "Oh No! You toched the border, no worries keep going! We're all winners here."
          );
          clearInterval(interval);
        } else if (
          mySnake.offsetLeft - 1 === dot.offsetLeft &&
          mySnake.offsetTop - 1 === dot.offsetTop
        ) {
          dot.style.top = parseInt(dot.style.top) + 20 + 'px';
          // dot.style.left = parseInt(dot.style.left) + position + 'px';
          score++;
          document.querySelector('nav').innerText = score;

          console.log(score);
          console.log('they touched');
        } else if (winnerCheck(score)) {
          mySnake.style.left = 0;
          mySnake.style.top = 0;
        }
      }, 100);
      break;
    case 40:
      interval = setInterval(() => {
        mySnake.style.top = parseInt(mySnake.style.top) + position + 'px';
        if (mySnake.style.top === '200px') {
          mySnake.style.top = parseInt(mySnake.style.top) + position + 'px';
          mySnake.style.left = 0;
          mySnake.style.top = 0;
          alert(
            "Oh No! You toched the border, no worries keep going! We're all winners here."
          );
          clearInterval(interval);
        } else if (
          mySnake.offsetLeft - 1 === dot.offsetLeft &&
          mySnake.offsetTop - 1 === dot.offsetTop
        ) {
          dot.style.left = parseInt(dot.style.left) + 20 + 'px';

          score++;
          document.querySelector('nav').innerText = score;
        } else if (winnerCheck(score)) {
          mySnake.style.left = 0;
          mySnake.style.top = 0;
        }
      }, 100);
      break;
  }
});

// reset button
let btn = document.querySelector('button');
btn.addEventListener('click', () => {
  clearInterval(interval);
  mySnake.style.left = 0;
  mySnake.style.top = 0;
  score = 0;
  document.querySelector('nav').innerText = score;
  dot.style.left = 0;
  dot.style.top = 0;
});
