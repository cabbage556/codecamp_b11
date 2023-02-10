const makeChange = require('../src/makeChange');

describe('makeChange', () => {
  test('should return 14', () => {
    expect(makeChange(4730)).toEqual(14);
  });

  test('should return 13', () => {
    expect(makeChange(2940)).toEqual(13);
  });

  test('should return 210', () => {
    expect(makeChange(100392)).toEqual(210);
  });
});
