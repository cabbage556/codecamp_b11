const sortString = require('../src/sortString');

describe('sortString', () => {
  test(`should return 'lets coding together'`, () => {
    expect(sortString('coding2 together3 lets1')).toEqual(
      'lets coding together'
    );
  });

  test(`should return 'This is a sentence'`, () => {
    expect(sortString('i2s sente4nce 1This a3')).toEqual('This is a sentence');
  });

  test(`should return 'Devils tongue jelly'`, () => {
    expect(sortString(`jel3ly D1evils tongu2e`)).toEqual(`Devils tongue jelly`);
  });

  test(`should return 'Hello World'`, () => {
    expect(sortString('Wor2ld H1ello')).toEqual('Hello World');
  });

  test(`should return 'a b c d'`, () => {
    expect(sortString('b2 3c 4d 1a')).toEqual('a b c d');
  });

  test(`should return 'a b c d e f g h i j k l m n o p q r s t u v w x y z'`, () => {
    const alphabet =
      'a1 2b 3c 4d e5 f6 g7 8h i9 10j 11k l12 m13 14n 15o p16 q17 18r s19 t20 21u 22v 23w x24 25y z26';
    expect(sortString(alphabet)).toEqual(
      'a b c d e f g h i j k l m n o p q r s t u v w x y z'
    );
  });
});
