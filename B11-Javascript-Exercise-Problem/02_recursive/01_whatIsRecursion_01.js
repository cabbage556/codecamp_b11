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
    
    whatIsRecursion_01 함수는 숫자 타입 데이터인 count 를 매개변수로 받고,
    함수 안에는 sum 이란 변수에 초기값으로 0 이 주어집니다.

    count 의 수만큼 반복하여 sum 의 변수에 2를 더해주는 반복문을 진행한 후
    총 합의 값을 리턴하는 함수를 작성해주세요.

    ----

    입력 예시

    1. whatIsRecursion_01(6)

    2. whatIsRecursion_01(0)
    
    ----

    출력 예시

    1.  12
    
    2.  0
    
*/

function whatIsRecursion_01(count) {
  if (count <= 0) return 0;

  return 2 + whatIsRecursion_01(count - 1);
}

module.exports = whatIsRecursion_01;
