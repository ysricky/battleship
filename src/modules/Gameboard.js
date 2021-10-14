import Ship from './ship';

const Gameboard = () => {
  const board = Array(6).fill(null);
  const fleet = [];

  const placeShip = (coordinates) => {
    const { length } = coordinates;
    fleet.push(Ship(length));
    coordinates.forEach((coordinate, index) => {
      board[coordinate] = {
        id: fleet.length - 1,
        part: index,
        isHit: false,
      };
    });
  };

  const receiveAttack = (coordinate) => {
    if (board[coordinate] === null) {
      board[coordinate] = { isMissed: true };
      return 'missed';
    }
    fleet[board[coordinate].id].hit(board[coordinate].part);
    board[coordinate].isHit = true;
    return 'hit';
  };

  const isFleetSunk = () => {
    const wipedOut = fleet.every((ship) => ship.isSunk());
    return wipedOut;
  };

  return { placeShip, receiveAttack, isFleetSunk };
};

export default Gameboard;
