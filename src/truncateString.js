/*
    문자열 자르기

    문자열 str과 숫자 타입 데이터 limit가 주어집니다.
    str은 각 단어들이 하나의 공백으로 구분되어 있습니다.
    주어진 str의 단어들을 limit만큼 자른 문자열을 리턴해 주세요.

    예를 들어,
    str로 문자열 'Hello World Welcome'과
    limit로 숫자 2가 주어졌다면,
    ['Hello', 'World', 'Welcome'] 이와 같이 공백으로 구분된 단어는 3개이며
    앞에서 limit만큼 잘라낸 'Hello World' 문자열을 리턴하면 됩니다.

    - str은 모두 공백과 영어 알파벳으로 이루어져 있습니다.
    - 리턴되는 문자열은 주어진 문자열과 같이 공백으로 구분 되어야 합니다.
    - 리턴되는 문자열의 끝에는 공백이 존재해서는 안됩니다.

    입출력 예시
    ------------------------------
    input
    ------------------------------

    case1:
      truncateString('Hello World', 1)

    case2:
      truncateString('Hello World Welcome', 2)

    ------------------------------
    output
    ------------------------------

    case1:
      'Hello'

    case2:
      'Hello World'

*/

function truncateString(str, limit) {
  const answer = new Array(limit);
  str = str.split(" ");

  for (let i = 0; i < limit; i++) {
    answer[i] = str[i];
  }

  return answer.join(" ");
}

module.exports = truncateString;
