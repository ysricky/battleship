import Gameboard from '../modules/gameboard';

describe('record shot', () => {
  const mockPlayerBoard = Gameboard();
  mockPlayerBoard.placeShip([0, 1]);
  mockPlayerBoard.placeShip([3, 4, 5]);

  test('check board', () => {
    expect(mockPlayerBoard.board).toMatchObject([
      { id: 0, part: 0, isHit: false },
      { id: 0, part: 1, isHit: false },
      null,
    ]);
  });
  test('missed shot', () => {
    expect(mockPlayerBoard.receiveAttack(2)).toBe('missed');
  });
  test('accurate shot', () => {
    expect(mockPlayerBoard.receiveAttack(1)).toBe('hit');
  });
  test('check if ship is sunk', () => {
    mockPlayerBoard.receiveAttack(0);
    expect(mockPlayerBoard.fleet[0].isSunk()).toBe(true);
  });
  test('check board object after attack', () => {
    expect(mockPlayerBoard.board).toMatchObject([
      {
        id: 0,
        part: 0,
        isHit: true,
      },
      { id: 0, part: 1, isHit: true },
      { isMissed: true },
    ]);
  });
  test.only('check if entire fleet was defeated', () => {
    expect(mockPlayerBoard.isFleetSunk()).toBe(false);
  });
});
