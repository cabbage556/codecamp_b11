const sortNum = require('../src/sortNum');

describe('sortNum', () => {
  test('should return [1, 2, 3]', () => {
    expect(sortNum([2, 3, 1])).toEqual([1, 2, 3]);
  });

  test('should return [0, 0, 1]', () => {
    expect(sortNum([1, 0, 0])).toEqual([0, 0, 1]);
  });

  test('should return [83, 94, 105]', () => {
    expect(sortNum([105, 94, 83])).toEqual([83, 94, 105]);
  });

  test('should return [ 23, 400, 501 ]', () => {
    expect(sortNum([400, 501, 23])).toEqual([23, 400, 501]);
  });
});
