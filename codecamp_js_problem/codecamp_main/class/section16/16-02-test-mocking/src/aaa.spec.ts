// 1. 한개 테스트하기
it('더하기 테스트', () => {
  // 실제 테스트 부분
  const a = 1;
  const b = 2;

  expect(a + b).toBe(3);
});

// 2. 여러개 묶음으로 테스트하기
describe('나의 테스트 그룹', () => {
  it('더하기 테스트', () => {
    // 실제 테스트 부분
    const a = 1;
    const b = 2;

    expect(a + b).toBe(3);
  });

  it('곱하기 테스트', () => {
    // 실제 테스트 부분
    const a = 1;
    const b = 2;

    expect(a * b).toBe(2);
  });
});

// 3. 상품 구매하기 테스트 예제
describe('상품 구매 테스트', () => {
  // 모든 it 실행 전에 딱 한번 실행 - 로그인 등
  // beforeAll(() => {});

  // 각각의 it들 실행 전에 한번씩 매번 실행 - 초기화, 초기값 설정 등
  // beforeEach(() => {});

  it('돈 검증하기', () => {
    const result = true; // 돈이 충분하다고 가정
    expect(result).toBe(true);
  });

  it('상품 구매하기', () => {
    const result = true; // 상품을 구매했다고 가정
    expect(result).toBe(true);
  });
});
