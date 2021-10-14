import Ship from '../modules/Ship';

const carrier = Ship(5);
const patrol = Ship(2);

carrier.hit(2);
patrol.hit(0);
patrol.hit(1);

describe('check ship condition', () => {
  test('is getting single hit', () => {
    expect(carrier.isSunk()).toBe(false);
  });
  test('is getting multiple hits', () => {
    expect(patrol.isSunk()).toBe(true);
  });
});

describe('check ship direction', () => {
  test('direction horizontal', () => {
    expect(carrier.shipDirection[0]).toStrictEqual([0, 1, 2, 3, 4]);
  });
  test('direction vertical', () => {
    expect(carrier.shipDirection[1]).toStrictEqual([0, 10, 20, 30, 40]);
  });
});
