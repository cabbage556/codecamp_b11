const topsyTurvy = require('../src/topsyTurvy');

describe('topsyTurvy', () => {
  test('should return codecamp', () => {
    expect(topsyTurvy('campcode', [4, 5, 6, 7, 0, 1, 2, 3])).toEqual(
      'codecamp'
    );
  });

  test('should return starbucks', () => {
    expect(topsyTurvy('bsktcaurs', [4, 8, 7, 1, 6, 2, 5, 3, 0])).toEqual(
      'starbucks'
    );
  });

  test('should return postman', () => {
    expect(topsyTurvy('namtsop', [6, 5, 4, 3, 2, 1, 0])).toEqual('postman');
  });

  test('should return javascript', () => {
    expect(topsyTurvy('crijavapts', [5, 6, 7, 0, 1, 2, 3, 8, 9, 4])).toEqual(
      'javascript'
    );
  });
});
