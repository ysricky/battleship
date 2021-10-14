/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const ships = document.querySelectorAll('.ship');
const squares = document.querySelectorAll('.square');
// const box = document.querySelector('.box');

const dragStart = (event) => {
  // event.dataTransfer.setData('text', event.target.id);
  console.log(event.target.childNodes);
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

// const btnRotate = document.querySelector('.rotate');

// btnRotate.addEventListener('click', () => {
//   if (box.style.flexDirection === 'row') {
//     box.style.flexDirection = 'column';
//     ships.forEach((ship) => {
//       ship.style.transform = 'rotate(90deg)';
//     });
//   } else {
//     box.style.flexDirection = 'row';
//     ships.forEach((ship) => {
//       ship.style.transform = 'rotate(-90deg)';
//     });
//   }
// });

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKTtcbmNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3F1YXJlJyk7XG4vLyBjb25zdCBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm94Jyk7XG5cbmNvbnN0IGRyYWdTdGFydCA9IChldmVudCkgPT4ge1xuICAvLyBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsIGV2ZW50LnRhcmdldC5pZCk7XG4gIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5jaGlsZE5vZGVzKTtcbn07XG5cbi8vIGNvbnN0IGRyYWdFbnRlciA9ICgpID0+IHt9O1xuXG5jb25zdCBkcmFnT3ZlciA9IChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufTtcblxuLy8gY29uc3QgZHJhZ0xlYXZlID0gKCkgPT4ge307XG5cbmNvbnN0IGRyb3AgPSAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgZGF0YSA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0Jyk7XG4gIGV2ZW50LnRhcmdldC5hcHBlbmRDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhKSk7XG59O1xuXG5zaGlwcy5mb3JFYWNoKChzaGlwKSA9PiBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWdTdGFydCkpO1xuc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgLy8gc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGRyYWdFbnRlcik7XG4gIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGRyYWdPdmVyKTtcbiAgLy8gc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIGRyYWdMZWF2ZSk7XG4gIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZHJvcCk7XG59KTtcblxuLy8gY29uc3QgYnRuUm90YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdGF0ZScpO1xuXG4vLyBidG5Sb3RhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4vLyAgIGlmIChib3guc3R5bGUuZmxleERpcmVjdGlvbiA9PT0gJ3JvdycpIHtcbi8vICAgICBib3guc3R5bGUuZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nO1xuLy8gICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbi8vICAgICAgIHNoaXAuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuLy8gICAgIH0pO1xuLy8gICB9IGVsc2Uge1xuLy8gICAgIGJveC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ3Jvdyc7XG4vLyAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuLy8gICAgICAgc2hpcC5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKC05MGRlZyknO1xuLy8gICAgIH0pO1xuLy8gICB9XG4vLyB9KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==