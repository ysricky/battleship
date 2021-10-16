import Gameboard from '../modules/gameboard';

const playerBoard = Gameboard();

describe('check board composition', () => {
  test('after deploy one ship', () => {
    expect(playerBoard.placeShip([0, 1, 2])[0].id).toBe(0);
  });
  test('after deply two ships', () => {
    expect(playerBoard.placeShip([10, 20, 30])[30].part).toBe(2);
  });
});

describe('receiving attack', () => {
  test('missed attack', () => {
    expect(playerBoard.receiveAttack(3)).toBe('missed');
  });
  test('accurate attack', () => {
    expect(playerBoard.receiveAttack(1)).toBe('hit');
  });
});

describe('fleet is wiped out', () => {
  test(' after receive partial attack', () => {
    playerBoard.receiveAttack(0);
    playerBoard.receiveAttack(2);
    expect(playerBoard.isWipedOut()).toBe(false);
  });
  test('after receive full attack', () => {
    playerBoard.receiveAttack(10);
    playerBoard.receiveAttack(20);
    playerBoard.receiveAttack(30);
    expect(playerBoard.isWipedOut()).toBe(true);
  });
});
