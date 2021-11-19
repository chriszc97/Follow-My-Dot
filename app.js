const mySnake = document.querySelector('.snake');
let position = 10;

window.addEventListener('load', () => {
  mySnake.style.position = 'relative';
  mySnake.style.left = 0;
  mySnake.style.top = 0;
});
let snakeMove = () => {
  document.addEventListener('keydown', (e) => {
    setInterval(() => {
      switch (e.key) {
        case 'ArrowLeft':
          mySnake.style.left = parseInt(mySnake.style.left) - position + 'px';
          if (mySnake.style.left === '-200px') {
            mySnake.style.left = parseInt(mySnake.style.left) + position + 'px';
            console.log('left limit');
          }
          break;

        case 'ArrowRight':
          mySnake.style.left = parseInt(mySnake.style.left) + position + 'px';
          if (mySnake.style.left === '200px') {
            mySnake.style.left = parseInt(mySnake.style.left) - position + 'px';
            console.log('right limit');
          }
          break;
        case 'ArrowUp':
          mySnake.style.top = parseInt(mySnake.style.top) - position + 'px';
          if (mySnake.style.top === '-200px') {
            mySnake.style.top = parseInt(mySnake.style.top) + position + 'px';
            console.log('up limit');
          }
          break;
        case 'ArrowDown':
          mySnake.style.top = parseInt(mySnake.style.top) + position + 'px';
          if (mySnake.style.top === '200px') {
            mySnake.style.top = parseInt(mySnake.style.top) - position + 'px';
            console.log('down limit');
          }
          break;
      }
    }, 1000);
  });
};

// snakeMove();
// };
setInterval(snakeMove(), 1000);

// let snakeLeft = () => {
//   document.addEventListener('keydown', (e) => {
//     if (e.key === 'ArrowLeft') {
//       setInterval(() => {
//         mySnake.style.left = parseInt(mySnake.style.left) - position + 'px';
//         if (mySnake.style.left === '-200px') {
//           mySnake.style.left = parseInt(mySnake.style.left) + position + 'px';
//           console.log('left limit');
//         }
//       }, 100);
//     }
//   });
// };
// snakeLeft();
// let snakeRight = () => {
//   document.addEventListener('keydown', (e) => {
//     if (e.key === 'ArrowLeft') {
//       setInterval(() => {
//         mySnake.style.left = parseInt(mySnake.style.left) + position + 'px';
//         if (mySnake.style.left === '200px') {
//           mySnake.style.left = parseInt(mySnake.style.left) - position + 'px';
//           console.log('right limit');
//         }
//       }, 100);
//     }
//   });
// };
// snakeRight();
class Snake {
  constructor() {
    head: body = 0;
  }
}
