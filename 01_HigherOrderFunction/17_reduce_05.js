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

    사람들의 정보 (이름, 나이) 가 담겨있는 객체를 담는 배열 arr 가 주어지고
    초기값을 의미하는 initialValue 가 빈 객체로 주어질 경우

    나이가 제일 많은 사람의 정보를 찾아 
    객체에 담아 리턴하는 함수를 만들어주세요.


    !! reduce 메서드가 직접 사용되면 안됩니다.
    !! 나이가 동일한 사람이 여러명이라면, 이름 순서가 뒤에 있는 사람의 정보를 담아주세요.
       (알파벳 순서로 정렬할 수 있는 방법이 필요합니다.)

    ----

    입력 예시
    
    1. reduce_05(
        [
            { name : "Aiden", age : 33 },
            { name : "Gray", age : 52 },
            { name : "Junny", age : 9 },
            { name : "Oliver", age : 11 }
        ],
        {}
    )

    2. reduce_05(
        [
            { name : "Aiden", age : 33 },
            { name : "Gray", age : 52 },
            { name : "Junny", age : 9 },
            { name : "Aaron", age : 52 },
            { name : "Oliver", age : 11 }
        ],
        {}
    )

    ----

    출력 예시

    1.  { name : "Gray", age : 52  }
    2.  { name : "Gray", age : 52  }

*/

function reduce_05(arr, initialValue) {
  const elderArr = [];

  // 나이 기준 내림차순 정렬
  arr.sort((a, b) => {
    if (a.age < b.age) return 1;
    if (a.age > b.age) return -1;
    return 0;
  });

  // elderArr에 연장자 객체 추가
  arr.forEach((objElement) => {
    if (objElement.age === arr[0].age) elderArr.push(objElement);
  });

  // 이름 기준 오름차순 정렬
  elderArr.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  // 이름 순서가 뒤에 있는 사람의 정보 리턴
  return elderArr.pop();
}

module.exports = reduce_05;
