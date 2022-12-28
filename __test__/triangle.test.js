const triangle = require('../src/triangle');

describe('직각삼각형', () => {
  test('should return "right"', () => {
    expect(triangle(3, 4, 5)).toEqual('right');
  });

  test('should return "wrong"', () => {
    expect(triangle(4, 5, 10)).toEqual('wrong');
  });
});
