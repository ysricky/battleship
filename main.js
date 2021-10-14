/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const ships = document.querySelectorAll('.ship');
const squares = document.querySelectorAll('.square');
const box = document.querySelector('.box');

const dragStart = (event) => {
  event.dataTransfer.setData('text', event.target.id);
};

// const dragEnter = () => {};

const dragOver = (event) => {
  event.preventDefault();
};

// const dragLeave = () => {};

const drop = (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData('text');
  event.target.appendChild(document.getElementById(data));
};

ships.forEach((ship) => ship.addEventListener('dragstart', dragStart));
squares.forEach((square) => {
  // square.addEventListener('dragenter', dragEnter);
  square.addEventListener('dragover', dragOver);
  // square.addEventListener('dragleave', dragLeave);
  square.addEventListener('drop', drop);
});

const btnRotate = document.querySelector('.rotate');

btnRotate.addEventListener('click', () => {
  if (box.style.flexDirection === 'row') {
    box.style.flexDirection = 'column';
    ships.forEach((ship) => {
      ship.style.transform = 'rotate(90deg)';
    });
  } else {
    box.style.flexDirection = 'row';
    ships.forEach((ship) => {
      ship.style.transform = 'rotate(-90deg)';
    });
  }
});

squares[2].style.backgroundColor = 'red';

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwJyk7XG5jb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNxdWFyZScpO1xuY29uc3QgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJveCcpO1xuXG5jb25zdCBkcmFnU3RhcnQgPSAoZXZlbnQpID0+IHtcbiAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQnLCBldmVudC50YXJnZXQuaWQpO1xufTtcblxuLy8gY29uc3QgZHJhZ0VudGVyID0gKCkgPT4ge307XG5cbmNvbnN0IGRyYWdPdmVyID0gKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59O1xuXG4vLyBjb25zdCBkcmFnTGVhdmUgPSAoKSA9PiB7fTtcblxuY29uc3QgZHJvcCA9IChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBkYXRhID0gZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQnKTtcbiAgZXZlbnQudGFyZ2V0LmFwcGVuZENoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGEpKTtcbn07XG5cbnNoaXBzLmZvckVhY2goKHNoaXApID0+IHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZ1N0YXJ0KSk7XG5zcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAvLyBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgZHJhZ0VudGVyKTtcbiAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZHJhZ092ZXIpO1xuICAvLyBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgZHJhZ0xlYXZlKTtcbiAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcm9wKTtcbn0pO1xuXG5jb25zdCBidG5Sb3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm90YXRlJyk7XG5cbmJ0blJvdGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaWYgKGJveC5zdHlsZS5mbGV4RGlyZWN0aW9uID09PSAncm93Jykge1xuICAgIGJveC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgc2hpcC5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgYm94LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAncm93JztcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBzaGlwLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoLTkwZGVnKSc7XG4gICAgfSk7XG4gIH1cbn0pO1xuXG5zcXVhcmVzWzJdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9