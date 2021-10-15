import Ship from '../modules/ship';

const mockPatrol = Ship(2);
const mockDestroyer = Ship(3);

describe('check ship condition', () => {
  test('after getting first hit', () => {
    expect(mockPatrol.hit(0)).toMatchObject(['hit', null]);
  });
  test('after getting multiple hits', () => {
    expect(mockPatrol.hit(1)).toMatchObject(['hit', 'hit']);
  });
});

describe('check if the ship is sunk', () => {
  test('after single hit', () => {
    mockDestroyer.hit(0);
    expect(mockDestroyer.isSunk()).toBe(false);
  });

  test('after multiple hits', () => {
    mockDestroyer.hit(1);
    mockDestroyer.hit(2);
    expect(mockDestroyer.isSunk()).toBe(true);
  });
});
