const mySnake = document.querySelector('.snake');
let dot = document.createElement('div');
document.querySelector('.gameGrid').appendChild(dot);
dot.style.backgroundColor = 'rgb(70,108,90)';
dot.style.borderRadius = '50%';

// let eat = ()=>{
//     if()
// }
let position = 10;
let interval = null;

window.addEventListener('load', () => {
  mySnake.style.position = 'relative';
  mySnake.style.left = 0;
  mySnake.style.top = 0;
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
        if (mySnake.style.left === '-200px') {
          mySnake.style.left = parseInt(mySnake.style.left) + position + 'px';
          console.log('left limit');
        }
      }, 100);
      break;

    case 'ArrowRight':
      interval = setInterval(() => {
        mySnake.style.left = parseInt(mySnake.style.left) + position + 'px';
        if (mySnake.style.left === '200px') {
          mySnake.style.left = parseInt(mySnake.style.left) - position + 'px';
          console.log('right limit');
        }
      }, 100);
      break;
    case 'ArrowUp':
      interval = setInterval(() => {
        mySnake.style.top = parseInt(mySnake.style.top) - position + 'px';
        if (mySnake.style.top === '-200px') {
          mySnake.style.top = parseInt(mySnake.style.top) + position + 'px';
          console.log('up limit');
        }
      }, 100);
      break;
    case 'ArrowDown':
      interval = setInterval(() => {
        mySnake.style.top = parseInt(mySnake.style.top) + position + 'px';
        if (mySnake.style.top === '200px') {
          mySnake.style.top = parseInt(mySnake.style.top) - position + 'px';
          console.log('down limit');
        }
      }, 100);
      break;
  }
});
// console.log(dot.position.left);
// console.log(dot.position.top);
// Make the snake a stack, for every dot it eats the snake's body will increase its stack.
