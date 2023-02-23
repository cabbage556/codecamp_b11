const rotateArray = require('../src/rotateArray');

describe('rotateArray', () => {
  test('should return [5, 6, 7, 1, 2, 3, 4]', () => {
    expect(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([
      5, 6, 7, 1, 2, 3, 4,
    ]);
  });

  test('should return [-2, 3, -9, 1, -8, 5, 6]', () => {
    expect(rotateArray([5, 6, -2, 3, -9, 1, -8], 12)).toEqual([
      -2, 3, -9, 1, -8, 5, 6,
    ]);
  });
});
