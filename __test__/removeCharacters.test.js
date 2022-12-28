const removeCharacters = require('../src/removeCharacters');

describe('removeCharacters', () => {
  test(`should return 'bcd'`, () => {
    expect(removeCharacters('abcde')).toEqual('bcd');
  });

  test(`should return 'codecamp'`, () => {
    expect(removeCharacters('ccodecampp')).toEqual('codecamp');
  });

  test(`should return 'a'`, () => {
    expect(removeCharacters('aaa')).toEqual('a');
  });
});
