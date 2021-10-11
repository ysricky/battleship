import Ship from '../modules/Ship';

test('check if ship is sunk', () => {
  const destroyer = Ship(3);
  destroyer.hit(0);
  destroyer.hit(1);
  destroyer.hit(2);
  expect(destroyer.isSunk()).toBe(true);
});

// test.only('hit battleship', () => {
//   const battleship = shipFactory('battleship', 7);
//   battleship.hit();
//   expect(battleship.healthBar).toBe(60);
// });
