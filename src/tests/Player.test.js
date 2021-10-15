import Player from '../modules/player';
import Gameboard from '../modules/gameboard';

describe('attack enemy board', () => {
  const computerBoard = Gameboard();
  const player = Player();
  computerBoard.placeShip([0, 1, 2]);
  computerBoard.placeShip([3, 4, 5]);

  test.only('first attack', () => {
    player.attackEnemyBoard(computerBoard, 0);
    expect(computerBoard.isWipedOut()).toBe(false);
  });
  test('second attack', () => {
    player.attackEnemyBoard(computerBoard, 1);
    expect(computerBoard.isWipedOut()).toBe(false);
  });
  test('third attack', () => {
    player.attackEnemyBoard(computerBoard, 2);
    expect(computerBoard.isWipedOut()).toBe(false);
  });
  test('random legal move', () => {
    expect(player.randomAttack(computerBoard)).toMatchObject([3, 4, 5]);
  });
});
