const addNew = require('../src/addNew');

describe('addNew', () => {
  test(`should return { a: 1, b: 2, c: 3 }`, () => {
    expect(
      addNew(
        {
          a: 1,
          b: 2,
        },
        {
          b: 2,
          c: 3,
        }
      )
    ).toEqual({ a: 1, b: 2, c: 3 });
  });

  test(`should return { a: 1, b: 2, c: 3, d: 5 }`, () => {
    expect(
      addNew(
        {
          a: 1,
          b: 2,
        },
        {
          a: 2,
          c: 3,
          d: 5,
        }
      )
    ).toEqual({ a: 1, b: 2, c: 3, d: 5 });
  });
});
