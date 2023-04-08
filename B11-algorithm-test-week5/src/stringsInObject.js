/*
    문자열 타입

    객체 obj가 주어집니다.
    obj는 a, b...와 같이 알파벳을 키로 가집니다.
    각 키에 대응되는 값들은 어떠한 타입이든 들어올 수 있습니다.
    참조된 값의 타입이 string인 데이터의 개수만 카운트하여
    해당 숫자를 리턴해 주세요.

    입출력 예시
    ------------------------------
    input
    ------------------------------

    case1:
      const obj = {
        a: 'hello',
        b: ['abc'],
        c: 'world',
        d: 100,
        e: false
      }

      stringInObject(obj)

    case2:
      const obj = {
        a: 1,
        b: 2,
        c: 3
      }

      stringInObject(obj)

    ------------------------------
    output
    ------------------------------

    case1:
      2

    case2:
      0
    
*/

function stringsInObject(obj) {
  let answer = 0;

  for (const key in obj) {
    if (typeof obj[key] === "string") answer++;
  }

  return answer;
}

module.exports = stringsInObject;
