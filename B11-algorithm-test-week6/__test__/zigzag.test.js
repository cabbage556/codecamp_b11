const zigzag = require('../src/zigzag');

describe('zigzag', () => {
  test(`should return 'ATTLIHSGRMEOT'`, () => {
    expect(zigzag('ALGORITHMTEST', 4)).toEqual('ATTLIHSGRMEOT');
  });

  test(`should return 'CCOEAPDM'`, () => {
    expect(zigzag('CODECAMP', 3)).toEqual('CCOEAPDM');
  });

  test(`should return 'A'`, () => {
    expect(zigzag('A', 1)).toEqual('A');
  });

  test(`should return 'ZGAIZG'`, () => {
    expect(zigzag('ZIGZAG', 2)).toEqual('ZGAIZG');
  });
});
