/*
    양 한 마리, 양 두 마리...

    매개변수 arr로 배열이 주어집니다.
    해당 배열 arr은 문자열을 요소로 가집니다.
    arr의 요소 중에서 문자열 'sheep'이 총 몇개인지
    그 수를 리턴해 주세요.
    
    - arr의 요소는 모두 문자열입니다.
    - Number 타입의 데이터를 리턴해야 합니다.
    - arr의 요소 중 'sheep'이 존재하지 않는다면, 숫자 0을 리턴해 주세요.

    입출력 예시
    ------------------------------
    input
    ------------------------------
    
    const arr = [
      'sheep',
      'wolf',
      'sheep',
      'sheep',
      'human'
    ]

    countingSheep(arr)

    ------------------------------
    output
    ------------------------------

    3
    
*/

function countingSheep(arr) {
  // 'sheep' 요소만 갖는 배열을 만들고 길이를 반환하기
  return arr.filter((el) => el === "sheep").length;
}

module.exports = countingSheep;
