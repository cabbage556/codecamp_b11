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

    2차원 배열인 arr 가 주어집니다.
    2차원 배열 안에는 [ 이름, 나이 ] 를 나타내는 문자열 데이터와 숫자 데이터가 들어 있습니다.

    초기값을 의미하는 initialValue 가 옵션으로 주어질 경우
    2차원 배열에 있는 데이터의 [ 이름, 나이 ] 데이터를 객체의 name, age 키 값에 담아
    새로운 배열에 담아 리턴해주세요.

    
    !! reduce 메서드가 직접 사용되면 안됩니다.
    !! 초기값에는 숫자 타입 이외의 데이터가 들어올 수 있습니다.

    ----

    입력 예시
    
    1. reduce_04(
        [ ["철수", 10], ["영희", 11], ["훈이", 9], ["맹구", 10] ]
    )

    // 초기값이 주어질 경우
    2. reduce_04(
        [ ["철수", 10], ["영희", 11], ["훈이", 9], ["맹구", 10] ],
        []
    )

    ----

    출력 예시

    1.  [
            { name : "철수", age : 10 }, 
            { name : "영희", age : 11 }, 
            { name : "훈이", age : 9 }, 
            { name : "맹구", age : 10 }, 
        ]

    2.  [
            { name : "철수", age : 10 }, 
            { name : "영희", age : 11 }, 
            { name : "훈이", age : 9 }, 
            { name : "맹구", age : 10 }, 
        ]
*/

function reduce_04(arr, initialValue) {
  const result = initialValue ? initialValue : [];

  arr.forEach((arrElement) => {
    const obj = {};
    arrElement.forEach((element) => {
      typeof element === "string" ? (obj.name = element) : (obj.age = element);
    });
    result.push(obj);
  });

  return result;
}

module.exports = reduce_04;
