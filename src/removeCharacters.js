/*
    문자 제거

    길이 3이상의 문자열 str이 주어집니다.
    주어진 문자열에서
    가장 앞의 문자열과 가장 뒤의 문자열을 제거한
    문자열을 리턴해 주세요.
    
    - 문자열 str 내에 공백은 존재하지 않습니다.
    - 문자열 str은 모두 영어 알파벳으로 구성되어 있습니다.
    - (3 <= str.length)
    
    입출력 예시
    ------------------------------
    input
    ------------------------------

    removeCharacters('abcde')

    ------------------------------
    output
    ------------------------------

    'bcd'
    
*/

function removeCharacters(str) {
  const strArr = str.split(""); // 배열로 나누기
  strArr.pop(); // 가장 뒤의 요소 제거
  strArr.shift(); // 가장 앞의 요소 제거
  return strArr.join(""); // 문자열로 합치기
}

module.exports = removeCharacters;
