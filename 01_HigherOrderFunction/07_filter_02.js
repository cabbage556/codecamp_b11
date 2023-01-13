/* 

    filter 메서드는 특정된 배열 데이터의 길이만큼 반복 실행하여
    콜백함수가 리턴되는 결과값이 true 일 경우에만 배열의 요소 데이터를
    새로운 배열에 담아서 리턴합니다.

    ----

    문제

    숫자 데이터가 담겨있는 1차원 배열 arr 가 매개변수로 주어집니다.

    함수 안에서 또 다른 함수인 HoF 함수를 리턴했을 때
    HoF 함수의 리턴 값이 true 값임을 부합하는 배열 데이터를 새로운 배열에 담아주거나
    HoF 함수의 리턴 값이 true 값임에 부합되는 배열 데이터들을 모아
    새로운 배열을 리턴하는 함수를 작성해주세요.

    
    !! filter 매서드가 직접 사용되면 안됩니다.
    !! 반드시 HoF 함수를 사용해서 풀어주세요.
    !! HoF 함수의 매개변수는 마음대로 추가하셔도 됩니다.

    ----

    입력 예시
    
    filter_02([1, 2, 3, 4, 5, 6])
    
    ----

    출력 예시
        [2, 4, 6]

*/

function filter_02(arr) {
  function HoF() {
    const result = [];

    arr.forEach((data) => {
      if (data % 2 === 0) result.push(data);
    });

    return result;
  }

  return HoF();
}

module.exports = filter_02;
