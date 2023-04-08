const stringsInObject = require('../src/stringsInObject');

describe('stringsInObject', () => {
  test('should return 2', () => {
    const obj = {
      a: 'hello',
      b: ['abc'],
      c: 'world',
      d: 100,
      e: false,
    };
    expect(stringsInObject(obj)).toEqual(2);
  });

  test('should return 0', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3,
    };
    expect(stringsInObject(obj)).toEqual(0);
  });

  test('should return 3', () => {
    const obj = {
      a: 'a',
      b: 'b',
      c: '[123]',
    };
    expect(stringsInObject(obj)).toEqual(3);
  });

  const randomObj = {};
  let temp = String(Math.floor(Math.random() * 100));
  if (temp.length < 3) temp += '0';
  for (let i = 1; i <= temp; i++) {
    randomObj[i] = String(i);
  }
  test(`should return ${temp}`, () => {
    expect(stringsInObject(randomObj)).toEqual(Number(temp));
  });
});
