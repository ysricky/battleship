// import Ship from './modules/ship';
import Gameboard from './gameboard';
import Player from './player';

const LoadUI = () => {
  const playerField = document.querySelector('.player-field-container');
  const enemyField = document.querySelector('.enemy-field-container');

  const humanPlayer = Player();
  const computer = Player();

  const playerBoard = Gameboard();

  // create function to place ship on legal square

  //   playerBoard.placeShip([6, 7]);
  playerBoard.placeShip([80]);
  //   playerBoard.placeShip([85, 86, 87]);
  //   playerBoard.placeShip([39, 49, 59, 69]);
  //   playerBoard.placeShip([20, 30, 40, 50, 60]);

  const enemyBoard = Gameboard();

  // create function to randomly place ship
  enemyBoard.placeShip([3, 4, 5]);
  enemyBoard.placeShip([22, 23, 24, 25, 26]);

  playerBoard.board.forEach((element) => {
    const square = document.createElement('div');
    square.classList.add('player-square');
    if (element !== null) square.style.backgroundColor = 'blue';
    playerField.appendChild(square);
  });

  enemyBoard.board.forEach((element, index) => {
    const square = document.createElement('div');
    square.classList.add('enemy-square');
    square.addEventListener('click', () => {
      if (
        enemyBoard.board[index] === null ||
        enemyBoard.board[index].isHit === false
      ) {
        if (humanPlayer.attack(enemyBoard, index) === 'hit') {
          square.style.backgroundColor = 'red';
        } else {
          square.style.backgroundColor = 'grey';
        }
        if (computer.randomAttack(playerBoard) === 'hit') {
          console.log('enemy hit your ship');
        } else {
          console.log('enemy missed');
        }
      } else {
        console.log('illegal move');
      }
      if (enemyBoard.isWipedOut()) console.log('you win');
      if (playerBoard.isWipedOut()) console.log('enemy win');
    });
    enemyField.appendChild(square);
  });
};

export default LoadUI;
