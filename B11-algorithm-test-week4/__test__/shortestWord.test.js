const shortestWord = require('../src/shortestWord');

describe('shortestWord', () => {
  test('should return "code"', () => {
    expect(shortestWord([123, 'codecamp', true, 'code'])).toEqual('code');
  });

  test('should return "dev"', () => {
    expect(shortestWord(['dev', 5, 2, 'ocean'])).toEqual('dev');
  });

  test('should return "coke"', () => {
    expect(shortestWord(['coke', 'sprite', 'snack'])).toEqual('coke');
  });
});
