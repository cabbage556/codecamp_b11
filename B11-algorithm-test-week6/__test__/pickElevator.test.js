const pickElevator = require('../src/pickElevator');

describe('pickElevator', () => {
  test(`should return 'left'`, () => {
    expect(pickElevator(4, 13, 2)).toEqual('left');
  });

  test(`should return 'right'`, () => {
    expect(pickElevator(1, 12, 8)).toEqual('right');
  });

  test(`should return 'left'`, () => {
    expect(pickElevator(8, 1, 9)).toEqual('left');
  });

  test(`should return 'right'`, () => {
    expect(pickElevator(13, 1, 7)).toEqual('right');
  });
});
