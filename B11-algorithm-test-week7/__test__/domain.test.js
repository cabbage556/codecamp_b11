const domain = require('../src/domain');

describe('domain', () => {
  test(`should return ['100 codebootcamp.co.kr', '50 naver.co.kr', '151 co.kr', '151 kr']`, () => {
    const result = domain([
      '100 codebootcamp.co.kr',
      '50 naver.co.kr',
      '1 co.kr',
    ]);
    expect(result).toHaveLength(4);
    expect(result).toContain('100 codebootcamp.co.kr');
    expect(result).toContain('50 naver.co.kr');
    expect(result).toContain('151 co.kr');
    expect(result).toContain('151 kr');
  });

  test(`should return [ '150 developer.mozilla.org', '150 mozilla.org', '150 org' ]`, () => {
    const result = domain(['150 developer.mozilla.org']);
    expect(result).toHaveLength(3);
    expect(result).toContain('150 developer.mozilla.org');
    expect(result).toContain('150 mozilla.org');
    expect(result).toContain('150 org');
  });

  test(`should return ['901 mail.com', '50 naver.com', '900 google.mail.com', '5 wiki.org', '5 org', '1 intel.mail.com', '951 com']`, () => {
    const result = domain([
      '900 google.mail.com',
      '50 naver.com',
      '1 intel.mail.com',
      '5 wiki.org',
    ]);
    expect(result).toHaveLength(7);
    expect(result).toContain('901 mail.com');
    expect(result).toContain('50 naver.com');
    expect(result).toContain('900 google.mail.com');
    expect(result).toContain('5 wiki.org');
    expect(result).toContain('5 org');
    expect(result).toContain('1 intel.mail.com');
    expect(result).toContain('951 com');
  });
});
