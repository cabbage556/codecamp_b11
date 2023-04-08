/* 

    시간복잡도의 O(1) : Constant Time 표기법은
    데이터의 길이와 상관없이 항상 일정한 시간복잡도의 시간을 가집니다.

    100개의 데이터를 가지는 배열이 하나 있다고 가정했을 때
    이 배열의 43번째 인덱스 값을 가져오려고 합니다.

    이때, 반복문을 통해 처음부터 43번째 인덱스까지 데이터를 가져온다면
    최소 44번까지 반복문을 실행해야 43번째 인덱스 데이터를 가져올 수가 있습니다.

    하지만, 직접적으로 배열의 43번째 인덱스로 접근하게 된다면
    이때는 1번의 시도로도 데이터를 가져올 수 있습니다.

    이러한 방식으로 항상 일정시간 안에서 처리되는 시간복잡도를
    O(1) 이라고 합니다.


    ----

    문제
    
    O_1 함수는 숫자 데이터가 담긴 배열 데이터 arr 와
    해당 배열 데이터에서 가져올 데이터의 인덱스 값인 idx 를 매개변수로 받습니다.

    두 개의 매개변수 데이터를 받아왔을 때
    배열에서 해당 인덱스의 데이터 값을 O(1) 의 시간복잡도로 리턴해주세요.


    !! 반드시 O(1) 의 시간복잡도를 이용해 문제를 풀어주세요.
    !! 만약, 배열에 idx 값의 데이터가 undefined 라면 -1을 리턴해주세요.

    ----

    입력 예시

    1. O_1([1, 2, 3, 4, 5], 3)

    2. O_1([1, 2, 3, 4, 5, 6, 7, 8], 2)

    3. 0_1([1, 1, 1], 6)
    
    ----

    출력 예시

    1.  4
    
    2.  3

    3. -1
    
*/

function O_1 (arr, idx) {
    // 여기에 코드를 작성하세요
    
}

module.exports = O_1;