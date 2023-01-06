/* 

    some 메서드는 특정된 배열 데이터의 길이만큼 반복 실행하여
    배열의 전체 데이터 중 콜백 함수의 리턴값이 하나라도 true 라면 true 를 리턴하고
    배열의 전체 데이터 중 콜백 함수의 리턴값이 모두 false 라면 false 를 리턴합니다.

    ----

    문제

    숫자 데이터가 담겨있는 1차원 배열 arr 와,
    콜백 함수인 callback 이 매개변수로 주어졌을 때

    배열 전체 데이터가 콜백 함수를 거쳐서 나온 결과값들이 하나라도 true 일 경우에는 true,
    전체가 false 일 때는 false 를 리턴해주세요.
    

    !! some 매서드가 직접 사용되면 안됩니다.

    ----

    입력 예시
    
    1. some(
            function( data ) { return data % 10 === 0 },
            [11, 12, 13, 14, 10]
        )

    2. some(
            function( data ) { return data % 10 === 0 },
            [11, 12, 13, 14, 15]
        )
    
    ----

    출력 예시

    1.  true

    2.  false
    
*/

function some(callback, arr) {
    // 여기에 코드를 작성하세요
    
}

module.exports = some;