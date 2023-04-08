const findGold = require('../src/findGold');

describe('findGold', () => {
  test('should return [ [ 0, 3 ], [1, 2], [3, 1] ]', () => {
    expect(
      findGold([
        ['N', 'N', 'N', 'G'],
        ['N', 'N', 'G', 'N'],
        ['N', 'N', 'N', 'N'],
        ['N', 'G', 'N', 'N'],
      ])
    ).toEqual([
      [0, 3],
      [1, 2],
      [3, 1],
    ]);
  });

  test('should return [ 2, 2 ]', () => {
    expect(
      findGold([
        ['N', 'N', 'N'],
        ['N', 'N', 'N'],
        ['N', 'N', 'G'],
      ])
    ).toEqual([2, 2]);
  });

  test('should return []', () => {
    expect(
      findGold([
        ['N', 'N', 'N'],
        ['N', 'N', 'N'],
        ['N', 'N', 'N'],
      ])
    ).toEqual([]);
  });
});
