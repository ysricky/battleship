import Ship from '../modules/ship';

describe('check ship condition', () => {
  const mockCarrier = Ship(5);
  const mockPatrol = Ship(2);

  mockCarrier.hit(2);
  mockPatrol.hit(0);
  mockPatrol.hit(1);

  test('is getting single hit', () => {
    expect(mockCarrier.isSunk()).toBe(false);
  });
  test('is getting multiple hits', () => {
    expect(mockPatrol.isSunk()).toBe(true);
  });
});
