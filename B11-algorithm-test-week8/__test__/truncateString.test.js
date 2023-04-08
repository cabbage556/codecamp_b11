const truncateString = require('../src/truncateString');

describe('truncateString', () => {
  test(`should return 'Hello'`, () => {
    expect(truncateString('Hello World', 1)).toEqual('Hello');
  });

  test(`should return 'You can do it'`, () => {
    expect(truncateString('You can do it dont give up', 4)).toEqual(
      'You can do it'
    );
  });

  test(`should return 'algorithm is fun'`, () => {
    expect(truncateString('algorithm is fun isnt it', 3)).toEqual(
      'algorithm is fun'
    );
  });

  test(`should return 'There are two ways to annoy people The first one is to stop while talking The second one is'`, () => {
    expect(
      truncateString(
        'There are two ways to annoy people The first one is to stop while talking The second one is to stop while talking',
        19
      )
    ).toEqual(
      'There are two ways to annoy people The first one is to stop while talking The second one is'
    );
  });
});
