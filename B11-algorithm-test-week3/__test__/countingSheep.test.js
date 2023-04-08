const countingSheep = require('../src/countingSheep');

describe('countingSheep', () => {
  test('should return 3', () => {
    expect(countingSheep(['sheep', 'wolf', 'sheep', 'sheep', 'human'])).toEqual(
      3
    );
  });

  test('should return 0', () => {
    expect(countingSheep(['wolf', 'wolf', 'wolf', 'wolf', 'wolf'])).toEqual(0);
  });

  test('should return 4', () => {
    expect(countingSheep(['sheep', 'sheep', 'sheep', 'sheep'])).toEqual(4);
  });
});
