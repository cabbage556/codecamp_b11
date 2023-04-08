const noSpaces = require('../src/noSpaces');

describe('noSpaces', () => {
  test('should return "codecamp"', () => {
    expect(noSpaces('c od e cam p')).toEqual('codecamp');
  });

  test('should return "delelop"', () => {
    expect(noSpaces('d     ev elo p')).toEqual('develop');
  });

  test('should return "javascript"', () => {
    expect(noSpaces('j av  asc ri   pt')).toEqual('javascript');
  });
});
