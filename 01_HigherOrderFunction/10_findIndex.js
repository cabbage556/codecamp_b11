/* 
    
    findIndex 메서드는 특정된 배열 데이터의 길이만큼 반복 실행하여
    요소 하나마다 콜백 함수에 부합되는 결과를 찾아, 제일 먼저 찾은 데이터의
    인덱스 값을 반환하고, 부합되는 결과가 없다면 -1 을 리턴합니다.

    ----

    문제

    숫자 데이터가 담겨있는 1차원 배열 arr 와,
    콜백 함수인 callback 이 매개변수로 주어졌을 때

    배열 전체 데이터에서 콜백 함수의 결과값에 해당되는 배열 데이터의
    가장 앞에 있는 인덱스 번호 또는 없다면 -1 을 리턴해주세요.
    

    !! findIndex 매서드가 직접 사용되면 안됩니다.

    ----

    입력 예시
    
    1.  findIndex(
            function( data ) { return data % 2 === 0 },
            [1, 3, 5, 4, 9, 10]
        )

    2.  findIndex(
            function( data ) { return data % 2 === 0 },
            [1, 3, 5, 7, 9]
        )


    ----

    출력 예시
    
    1.  3

    2.  -1
    
*/

function findIndex(callback, arr) {
    // 여기에 코드를 작성하세요
    
}

module.exports = findIndex;