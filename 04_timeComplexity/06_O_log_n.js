/* 

    시간복잡도의 O(log n) 표기법은
    O(n) 의 표기법을 일정한 횟수로 분할하여 문제를 풀이합니다.

    대표적인 예시로는 이진탐색법 (Binary Search) 가 있는데
    풀이 방식은 다음과 같습니다.

    1 부터 100 까지 높은 숫자 순서로 정렬된 배열 데이터가 있을 때
    이 숫자들 중에서 43번 숫자를 찾으려고 합니다.

    만약, O(n) 의 방식으로 문제를 풀이한다면 1 부터 43 까지
    앞에서부터 반복문을 실행하게 되므로, O(43) 의 시간복잡도를 가집니다.

    이진탐색법은 1 부터 100 까지의 숫자 중 가장 가운데 숫자인 50 을 기준으로 나눠
    50 보다 크다면 100 과의 중간값인 75 로 나누고 50 보다 작다면 1 과의 중간값인 25 로 나눕니다.

    숫자들을 계속 반의 값으로 나누다보면 43번 숫자와 근접해지면서
    최종적으로 O(n) 방식보다 더 빠르게 숫자를 찾아낼 수 있게 됩니다.


    ----

    문제
    
    이진탐색법을 직접 구현해보세요.

    무작위 숫자가 담겨져 있는 배열 arr 와 찾으려는 숫자 target 이 매개변수로 주어질 때
    이진탐색법을 통해 target 에 해당하는 숫자를 찾을 때까지 실행된 
    반복문의 횟수 중 최솟값을 리턴해주세요.


    !! 반드시 O(log n) 의 시간복잡도를 이용해 문제를 풀어주세요.
    !! 반복이 불가능한 조건이 주어질 경우에는 -1 을 리턴해주세요.

    ----

    입력 예시

    1. O_log_n( 
        [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
            41, 42, 43, 44, 45, 46, 47, 48, 49, 50
        ],
        37
    )

    2. O_log_n( 
        [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
            41, 42, 43, 44, 45, 46, 47, 48, 49, 50
        ],
        50
    )

    3. O_log_n( 
        [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
            41, 42, 43, 44, 45, 46, 47, 48, 49, 50
        ],
        76
    )

    4. O_log_n( 
        [
            9, 6, 7, 1, 4, 8, 5, 3, 2, 0
        ],
        4
    )

    
    ----

    출력 예시

    1.  5

    2.  1

    3.  -1

    4.  3

*/

function O_log_n(arr, target) {
    // 여기에 코드를 작성하세요
    
}

module.exports = O_log_n;