import Ship from '../modules/Ship';

test('create destroyer', () => {
  const destroyer = Ship('destroyer', 6);
  expect(destroyer.isSunk()).toBe(false);
});

// test.only('hit battleship', () => {
//   const battleship = shipFactory('battleship', 7);
//   battleship.hit();
//   expect(battleship.healthBar).toBe(60);
// });
