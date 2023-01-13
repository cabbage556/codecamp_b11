/* 

    reduce 메서드는 특정된 배열 데이터의 길이만큼 반복 실행하여
    콜백 함수에서 배열의 각각의 요소들을 가져와 누적값, 현재값을 매개변수로 받습니다.

    누적값은 반복문이 진행될 때마다 연산된 데이터가 저장이 되어 다음 반복문으로 넘어가며
    현재값은 현재 반복문에서 가져올 수 있는 배열의 요소 데이터를 가져옵니다.

    reduce 메서드에서는 초기값을 설정할 수 있으며,
    초기값이 설정될 경우 배열의 첫번째 데이터가 아닌 초기값이 누적값으로 할당됩니다.
    초기값이 없을 경우, 누적값은 배열의 가장 첫번째 데이터를
    현재값은 배열의 두번째 데이터를 제일 먼저 가져옵니다.

    ----

    문제

    숫자 데이터가 들어있는 1차원 배열 arr 와,
    초기값을 의미하는 initialValue 가 옵션으로 주어질 경우
    함수 안에 있는 HoF 함수를 이용해 배열의 총 합을 리턴하세요.


    !! reduce 메서드가 직접 사용되면 안됩니다.
    !! 반드시 HoF 함수를 사용해서 풀어주세요.
    !! HoF 함수의 매개변수는 마음대로 추가하셔도 됩니다.

    ----

    입력 예시
    
    1. reduce_02(
        [1, 2, 3, 4, 5]
    )

    // 초기값이 주어질 경우
    2. reduce_02(
        [-1, -2, -3, -4, -5],
        15
    )

    ----

    출력 예시

    1.  15

    2.  0
*/

function reduce_02(arr, initialValue) {
  function HoF(acc, cur) {
    return acc + cur;
  }

  let result = initialValue ? initialValue : 0;

  arr.forEach((number) => {
    result = HoF(result, number);
  });

  return result;
}

module.exports = reduce_02;
