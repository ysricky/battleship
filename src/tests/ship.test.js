import shipFactory from '../modules/ship';

test('create destroyer', () => {
  const destroyer = shipFactory('destroyer', 6);
  expect(destroyer).toStrictEqual({
    shipName: 'destroyer',
    shipLength: 6,
  });
});

// test.only('hit battleship', () => {
//   const battleship = shipFactory('battleship', 7);
//   battleship.hit();
//   expect(battleship.healthBar).toBe(60);
// });
