import Player from '../modules/Player';

test('return player name', () => {
  const playerOne = Player('Ricky');
  expect(playerOne.getName()).toBe('Ricky');
});
