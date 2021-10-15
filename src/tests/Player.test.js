import Player from '../modules/player';
import Gameboard from '../modules/gameboard';

describe('attack enemy board', () => {
  const computerBoard = Gameboard();
  const player = Player();
  computerBoard.placeShip([0, 1, 2]);
  computerBoard.placeShip([3, 4, 5]);

  test('first attack', () => {
    player.attackEnemyBoard(computerBoard, 0);
    expect(computerBoard.isFleetSunk()).toBe(false);
  });
  test('second attack', () => {
    player.attackEnemyBoard(computerBoard, 1);
    expect(computerBoard.isFleetSunk()).toBe(false);
  });
  test('third attack', () => {
    player.attackEnemyBoard(computerBoard, 2);
    expect(computerBoard.isFleetSunk()).toBe(false);
  });
  test('random legal move', () => {
    expect(player.randomAttack(computerBoard)).toMatchObject([3, 4, 5]);
  });
});
