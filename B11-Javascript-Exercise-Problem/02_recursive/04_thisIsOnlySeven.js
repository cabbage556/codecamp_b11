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
    
    thisIsOnlySeven 함수는 문자열 데이터 str 을 매개변수로 받습니다.
    thisIsOnlySeven 함수 안쪽으로 recursion 함수가 새로 생성되어 있고
    thisIsOnlySeven 함수의 리턴 값으로 recursion 함수를 실행합니다.

    recursion 함수는 리턴값으로 전체 문자열 str 에서 
    문자열 7을 제외한 나머지 문자열들을 모두 제거한 후
    문자열 7만 문자열에 남겼을 때에 제거된 모든 문자열의 수를 리턴합니다. 

    thisIsOnlySeven 함수가 recursion 함수의 리턴 값을 리턴했을 때
    str 매개변수에서 문자열 7만 남겨질 때까지 앞뒤의 모든 문자열이 제거된 수를 리턴하는 
    recursion 함수를 완성해주세요.


    !! str 매개변수에는 문자열 7이 반드시 포함되어 있습니다.
    !! 문자열 7은 str 문자열 안에 오직 하나만 있습니다. (중복 X)
    !! recursion 함수의 매개변수는 마음대로 추가하셔도 됩니다.
    !! 문자열을 자르는 메서드인 slice 와 substring or substr 을 사용해보세요.
    !! 반드시 recursion 함수를 사용해 문제를 푸셔야 합니다.

    ----

    입력 예시

    1. thisIsOnlySeven("1234567890")

    2. thisIsOnlySeven("711233440")

    ----

    출력 예시

    1.  9

    2.  8

*/

function thisIsOnlySeven(str) {
  function recursion(count) {
    if (str[count] === "7") return str.length - 1;

    return recursion(count + 1);
  }

  return recursion(0);
}

module.exports = thisIsOnlySeven;
