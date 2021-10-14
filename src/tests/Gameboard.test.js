import Gameboard from '../modules/Gameboard';

describe('record shot', () => {
  const playerBoard = Gameboard();
  playerBoard.placeShip(55);
  test('missed shot', () => {
    expect(playerBoard.receiveAttack(0)).toBe(false);
  });
  test('accurate shot', () => {
    expect(playerBoard.receiveAttack(55)).toBe(true);
  });
});
