/*
    불린 타입

    매개변수 bool로 boolean 타입의 데이터가 들어옵니다.
    만약 bool이 true라면, 문자열 'Yes'를,
    만약 bool이 false라면, 문자열 'No'를 리턴해 주세요.

    - 매개변수 bool은 true 혹은 false만 전달합니다.

    입출력 예시
    ------------------------------
    input
    ------------------------------
    
    booleanType(true)

    ------------------------------
    output
    ------------------------------

    'Yes'
    
*/

function booleanType(bool) {
  return bool
    ? "Yes" // bool이 true라면 문자열 'Yes' 반환
    : "No"; // bool이 false라면 문자열 'No' 반환
}

module.exports = booleanType;
