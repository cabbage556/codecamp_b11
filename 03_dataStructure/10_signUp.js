/* 

    ----

    문제
    
    초보 개발자 Junny 는 회원가입 페이지 개발 업무를 맡게 되었습니다.
    회원가입한 유저들의 정보를 어떻게 관리할까 고민한 Junny 는
    Hash Table 을 이용해서 유저들의 정보를 관리하고자 합니다.

    회원가입된 유저들의 아이디가 담긴 배열 users 와
    아이디를 해시하여 숫자로 변환해주는 해시함수인 hash 가 매개변수로 주어질 때
    유저들의 아이디를 Hash Table 로 관리한 총 결과물을 리턴해주세요.


    !! 유저의 아이디는 고유한 값을 가집니다.
    !! Hash Table 의 결과값은 배열 형태로 리턴되어야 합니다.
    !! 충돌이 발생할 경우 양방향성 Linked List 를 사용해 데이터를 저장해주세요.
    !! <empty item> 은 리턴하면 undefined 입니다.

    ----

    입력 예시

    1. signUp(
      ["a", "b", "c"],
      function( str ) { 
        if( str === "a" ) return 1;
        if( str === "b" ) return 3;
        if( str === "c" ) return 5;
      }
    )

    2. signUp(
      ["a", "b", "c", "aa"],
      function( str ) { 
        if( str === "a" ) return 1;
        if( str === "aa" ) return 1;
        if( str === "b" ) return 3;
        if( str === "c" ) return 5;
      }
    )

    
    ----

    출력 예시

    1.  [ undefined, 'a', undefined, 'b', undefined, 'c' ]

    2. [
        undefined,
        {
          a: { prev: null, next: 'aa' },
          aa: { prev: 'a', next: null }
        },
        undefined,
        'b',
        undefined,
        'c'
      ]

*/

function signUp(users, hash) {
	// 여기에 코드를 작성하세요.

}

module.exports = signUp;