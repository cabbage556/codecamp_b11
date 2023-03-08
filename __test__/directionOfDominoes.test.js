const directionOfDominoes = require('../src/directionOfDominoes');

describe('directionOfDominoes', () => {
  test(`should return 'LL.RR.LLRRLL..'`, () => {
    expect(directionOfDominoes('.L.R...LR..L..')).toEqual('LL.RR.LLRRLL..');
  });

  test(`should return 'RRR.LLLLLLRRR'`, () => {
    expect(directionOfDominoes('R.R.LL...LR..')).toEqual('RRR.LLLLLLRRR');
  });

  test(`should return 'LLLLLLRRRRRR'`, () => {
    expect(directionOfDominoes('.....LR.....')).toEqual('LLLLLLRRRRRR');
  });

  test(`should return 'RRRRR.LLLLL'`, () => {
    expect(directionOfDominoes('R.........L')).toEqual('RRRRR.LLLLL');
  });
});
