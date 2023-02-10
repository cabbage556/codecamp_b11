/*
    짧은 단어 찾기

    다양한 속성의 요소가 담긴 배열이 주어집니다.
    배열 내의 요소 중에서 가장 짧은 문자열을 찾아 리턴해야합니다.

    - 요소의 타입은 String이 아닐 수도 있습니다.
    - String 타입만을 비교해야합니다.
    - String 타입을 리턴해야합니다.
    - 주어진 배열 내에 문자열 타입 데이터가 존재하지 않는다면, 빈 문자열을 리턴해야합니다.
    
    입출력 예시
    ------------------------------
    input
    ------------------------------

    [ [1], 'codecamp', true, 'code' ]

    ------------------------------
    output
    ------------------------------

    'code'

*/

function shortestWord(arr) {
  const answer = arr
    .filter((el) => typeof el === "string") // 문자열 타입 골라내기
    .sort((a, b) => a.length - b.length); // 길이 순으로 오름차순 정렬

  return answer[0];
}

module.exports = shortestWord;
