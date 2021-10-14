const Gameboard = () => {
  const ships = [];

  const board = new Array(100)
    .fill()
    .map(() => ({ hasShip: false, isShot: false }));

  const placeShip = (coord) => {
    board[coord].hasShip = true;
    // add call ship factory function
  };

  const receiveAttack = (coord) => {
    board[coord].isShot = true;
    return board[coord].hasShip;
  };

  const allShipSunk = () => {
    ships.every((ship) => ship.isSunk());
    // add function to check if every ship is sunk
  };

  return { placeShip, receiveAttack, allShipSunk };
};

export default Gameboard;
