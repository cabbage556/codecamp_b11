const stringPattern = require('../src/stringPattern');

describe('stringPattern', () => {
  test('should return true', () => {
    const pattern = 'abba';
    const str = 'dog cat cat dog';
    expect(stringPattern(pattern, str)).toEqual(true);
  });

  test('should return false', () => {
    const pattern = 'abaa';
    const str = 'dog cat cat dog';
    expect(stringPattern(pattern, str)).toEqual(false);
  });

  test('should return false', () => {
    const pattern = 'a';
    const str = 'cup cup cup';
    expect(stringPattern(pattern, str)).toEqual(false);
  });

  test('should return true', () => {
    const pattern = 'abaabbba';
    const str = 'cup coffee cup cup coffee coffee coffee cup';
    expect(stringPattern(pattern, str)).toEqual(true);
  });

  test('should return true', () => {
    const pattern = 'abcabc';
    const str = 'cup ice coffee cup ice coffee';
    expect(stringPattern(pattern, str)).toEqual(true);
  });

  test('should return true', () => {
    const pattern = 'abcabc';
    const str = 'c b a c b a';
    expect(stringPattern(pattern, str)).toEqual(true);
  });
});
