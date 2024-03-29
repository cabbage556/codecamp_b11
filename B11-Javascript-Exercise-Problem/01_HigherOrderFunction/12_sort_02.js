/* 

    sort 메서드는 특정된 배열 데이터의 길이만큼 반복 실행하여
    콜백 함수로 받아오는 두개의 매개변수 데이터를 서로 비교한 후
    배열 데이터의 앞 뒤 순서를 변경합니다.

    ----

    문제

    숫자 데이터가 담겨있는 1차원 배열 arr 와
    오름차순으로 정렬할지, 내림차순으로 정렬할지를 정하는 boolean 타입 데이터
    sortType 을 매개변수로 받아올 때,

    HoF 함수의 매개변수로 주어지는 데이터 두개를 비교해서 배열 전체를
    sortType 이 true 일 때는 오름차순으로 정렬하고
    sortType 이 false 일 때는 내림차순으로 정렬해주세요.


    !! sort 매서드가 직접 사용되면 안됩니다.
    !! 반드시 HoF 함수를 사용해서 풀어주세요.
    !! HoF 함수의 매개변수는 마음대로 추가하셔도 됩니다.

    ----

    입력 예시
    
    // 오름차순
    1. sort_02([10, 4, 55, 22, 1], true)

    // 내림차순
    1. sort_02([10, 4, 55, 22, 1], false)

    ----

    출력 예시
    
    // 오름차순
    1.  [1, 4, 10, 22, 55]

    // 내림차순
    2.  [50, 22, 10, 4, 1]
    
*/

function sort_02(arr, sortType) {
  function swap(arr, i) {
    const temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }

  function HoF(arr, sortType) {
    // 버블정렬 알고리즘
    let unsortedIndex = arr.length - 1;
    let sorted = false;

    while (!sorted) {
      sorted = true;

      if (sortType) {
        // true => 오름차순
        for (let i = 0; i < unsortedIndex; i++) {
          if (arr[i] > arr[i + 1]) {
            swap(arr, i);
            sorted = false;
          }
        }
      } else {
        // false => 내림차순
        for (let i = 0; i < unsortedIndex; i++) {
          if (arr[i] < arr[i + 1]) {
            swap(arr, i);
            sorted = false;
          }
        }
      }

      unsortedIndex -= 1;
    }

    return arr;
  }

  return HoF(arr, sortType);
}

console.log(sort_02([10, 4, 55, 22, 1], false));

module.exports = sort_02;
