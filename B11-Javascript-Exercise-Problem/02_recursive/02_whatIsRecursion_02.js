/* 

    자바스크립트에서의 "재귀 함수 (Recurision Function)" 는
    함수가 계속해서 자신을 실행하여 반복하는 기능을 제공합니다.

    재귀 함수를 사용할 때는 아래의 규칙이 필수적으로 들어갑니다.
    - 함수 실행시에 자기 자신을 반드시 리턴해야 합니다.
    - 함수 실행이 무한적으로 실행되는 것을 방지하기 위해 종료되는 시점을 반드시 넣어주셔야 합니다.

    재귀 함수를 사용하면 반복문 while 문법을
    대신해서 사용할 수 있습니다.


    ----

    문제
    
    WhatIsRecursion_02 함수는 숫자 타입 데이터인 count 를 매개변수로 받고,
    함수 안으로 sum의 변수에 초기값으로 0이 주어집니다.

    WhatIsRecursion_02 함수 안쪽으로 recursion 함수가 새로 생성되어 있고
    WhatIsRecursion_02 함수의 리턴 값으로 recursion 함수를 실행합니다.

    recursion 함수가 종료될 때까지 sum 의 변수에 2를 더해주고
    sum 의 값을 리턴하는 함수를 완성해주세요.


    !! recursion 함수의 매개변수는 마음대로 추가하셔도 됩니다.
    !! 반드시 recursion 함수를 사용해 문제를 푸셔야 합니다.
    !! for 또는 while, 그외의 반복 메서드는 절대 사용하지 마세요.


    ----

    입력 예시

    1. WhatIsRecursion_02(6)
    
    2. WhatIsRecursion_02(20)

    ----

    출력 예시

    1.  12

    2.  40

*/

function WhatIsRecursion_02(count) {
  function recursion(count) {
    if (count === 0) return 0;

    return 2 + recursion(count - 1);
  }

  return recursion(count);
}

module.exports = WhatIsRecursion_02;
