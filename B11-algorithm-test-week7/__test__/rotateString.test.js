const rotateString = require('../src/rotateString');

describe('rotateString', () => {
  test(`should return true`, () => {
    expect(rotateString('abcde', 'deabc')).toEqual(true);
  });

  test(`should return false`, () => {
    expect(rotateString('abcde', 'cdeba')).toEqual(false);
  });

  test(`should return true`, () => {
    expect(rotateString('zxzx', 'xzxz')).toEqual(true);
  });

  test(`should return true`, () => {
    expect(rotateString('abc', 'abc')).toEqual(true);
  });

  test(`should return false`, () => {
    expect(rotateString('zxcz', 'zcxz')).toEqual(false);
  });
});
