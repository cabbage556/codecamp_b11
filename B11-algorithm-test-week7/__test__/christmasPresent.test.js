const christmasPresent = require('../src/christmasPresent');

describe('christmasPresent', () => {
  test(`should return 5`, () => {
    expect(christmasPresent([1, 0, 2])).toEqual(5);
  });

  test(`should return 4`, () => {
    expect(christmasPresent([1, 2, 2])).toEqual(4);
  });

  test(`should return 9`, () => {
    expect(christmasPresent([3, 4, 4, 0, 1, 0])).toEqual(9);
  });

  test(`should return 17`, () => {
    expect(christmasPresent([1, 2, 3, 4, 3, 4, 3, 4, 3])).toEqual(17);
  });

  test(`should return 19`, () => {
    expect(christmasPresent([3, 4, 5, 2, 0, 4, 2, 1, 0])).toEqual(19);
  });
});
