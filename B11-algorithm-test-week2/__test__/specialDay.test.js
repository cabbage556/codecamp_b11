const specialDay = require('../src/specialDay');

describe('specialDay', () => {
  test('should return "Before"', () => {
    expect(specialDay(2, 15)).toEqual('Before');
  });

  test('should return "After"', () => {
    expect(specialDay(10, 17)).toEqual('After');
  });

  test('should return "Special"', () => {
    expect(specialDay(2, 19)).toEqual('Special');
  });
});
