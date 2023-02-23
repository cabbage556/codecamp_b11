const palindrome = require('../src/palindrome');

describe('palindrome', () => {
  test(`should return 'edcbabcde'`, () => {
    expect(palindrome('abcde')).toEqual('edcbabcde');
  });

  test(`should return 'cabcbac'`, () => {
    expect(palindrome('abcbac')).toEqual('cabcbac');
  });

  test(`should return 'zxcxz'`, () => {
    expect(palindrome('zxcxz')).toEqual('zxcxz');
  });
});
