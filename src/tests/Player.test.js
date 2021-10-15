import Player from '../modules/player';
import Gameboard from '../modules/gameboard';

const humanBoard = Gameboard();
const computerPlayer = Player();

humanBoard.placeShip([1, 2, 3, 4, 5]);

describe('manually attacking enemy board', () => {
  test('missed atack', () => {
    expect(computerPlayer.attack(humanBoard, 0)).toBe('missed');
  });
  test('accurate attack', () => {
    expect(computerPlayer.attack(humanBoard, 5)).toBe('hit');
  });
});

test('check if ship is still available', () => {
  expect(humanBoard.isWipedOut()).toBe(false);
});

describe('randomly attacking legal spot', () => {
  test('first random attack', () => {
    expect(typeof computerPlayer.randomAttack(humanBoard)).toBe('string');
  });
  test('second random attack', () => {
    expect(typeof computerPlayer.randomAttack(humanBoard)).toBe('string');
  });
  test('third random attack', () => {
    expect(typeof computerPlayer.randomAttack(humanBoard)).toBe('string');
  });
  test('fourth random attack', () => {
    expect(typeof computerPlayer.randomAttack(humanBoard)).toBe('string');
  });
});

// test('all ship wiped out', () => {
//   expect(humanBoard.isWipedOut()).toBe(true);
// });
