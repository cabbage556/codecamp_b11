const booleanType = require('../src/booleanType');

describe('booleanType', () => {
  test(`should return 'Yes'`, () => {
    expect(booleanType(true)).toEqual('Yes');
  });

  test(`should return 'No'`, () => {
    expect(booleanType(false)).toEqual('No');
  });
});
