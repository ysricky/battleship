import Gameboard from '../modules/Gameboard';

test('return array of gameboard', () => {
  expect(Gameboard()).toStrictEqual({ gameBoardArray: [1, 2, 3, 4, 5] });
});
