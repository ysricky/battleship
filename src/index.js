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
