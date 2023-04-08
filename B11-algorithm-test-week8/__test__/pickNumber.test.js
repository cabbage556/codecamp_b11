const pickNumber = require('../src/pickNumber');

describe('pickNumber', () => {
  test(`should return [15]`, () => {
    expect(
      pickNumber([
        [8, 7, 3],
        [9, 11, 13],
        [15, 16, 17],
      ])
    ).toEqual([15]);
  });

  test(`should return [12]`, () => {
    expect(
      pickNumber([
        [1, 10, 4, 2],
        [9, 3, 8, 7],
        [15, 16, 17, 12],
      ])
    ).toEqual([12]);
  });

  test(`should return []`, () => {
    expect(
      pickNumber([
        [1, 9, 10],
        [4, 8, 1],
        [6, 1, 7],
      ])
    ).toEqual([]);
  });

  test(`should return [7]`, () => {
    expect(
      pickNumber([
        [7, 8],
        [1, 2],
      ])
    ).toEqual([7]);
  });
});
