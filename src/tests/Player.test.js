import Player from '../modules/player';

test('return player name', () => {
  const playerOne = Player('Ricky');
  expect(playerOne.getName()).toBe('Ricky');
});
