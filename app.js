const mySnake = document.querySelector('.snake');
const dot = document.querySelector('.dot');
const grid = document.querySelector('.gameGrid');
let position = 10;
let interval = null;
dot.className = 'dot';
dot.style.borderRadius = '50%';
dot.style.backgroundColor = 'rgb(143, 61, 105)';
grid.appendChild(dot);
// let dot = document.createElement('div');
// dot.className = 'dot';
// grid.appendChild(dot);
// dot.style.borderRadius = '50%';
// dot.style.backgroundColor = 'rgb(143, 61, 105)';
// css manipulation
let dotCss = document.querySelector('.dot').style;

console.log(mySnake.getBoundingClientRect());
const moveDot = () => {
  dotCss.gridColumStart = 15;
  dotCss.gridColumStart = 15;
  dotCss.gridColumStart = 15;
  dotCss.gridColumStart = 15;
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
  switch (e.key) {
    case 'ArrowLeft':
      interval = setInterval(() => {
        // console.log(mySnake.offsetLeft + ' the left snake');
        // console.log(mySnake.offsetTop + ' the top snake');
        // console.log(dot.offsetTop + 'the top dot');
        // console.log(dot.offsetLeft + ' the left dot');
        mySnake.style.left = parseInt(mySnake.style.left) - position + 'px';
        // console.log(mySnake.getBoundingClientRect());
        // mySnake.style =
        //   'grid-column-start: 2; grid-colum-end: 2; grid-row-start: 2; grid-row-end: 2;';
        // dotCss.gridColumStart = 15;
        // dotCss.gridColumEnd = 15;
        // dotCss.gridRowStart = 15;
        // dotCss.gridRowEnd = 15;
        if (mySnake.style.left === '-210px') {
          mySnake.style.left = parseInt(mySnake.style.left) + position + 'px';
          mySnake.style.left = 0;
          mySnake.style.top = 0;
          alert('you lost');
          clearInterval(interval);
        } else if (
          // if the snake and dot touch
          mySnake.offsetLeft - 20 === dot.offsetLeft &&
          mySnake.offsetTop - 20 === dot.offsetTop
        ) {
          console.log('they touched');
          dotCss.gridColumStart = 0;
          dotCss.gridColumEnd = 0;
          dotCss.gridRowStart = 0;
          dotCss.gridRowStart = 0;
        }
      }, 100);
      break;

    case 'ArrowRight':
      interval = setInterval(() => {
        mySnake.style.left = parseInt(mySnake.style.left) + position + 'px';
        if (mySnake.style.left === '190px') {
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
        if (mySnake.style.top === '-210px') {
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
        if (mySnake.style.top === '190px') {
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
console.log(mySnake.offsetLeft + ' the left snake');
console.log(mySnake.offsetTop + ' the top snake');
console.log(dot.offsetTop + 'the top dot');
console.log(dot.offsetLeft + ' the left dot');
// console.log(dot.getBoundingClientRect());
