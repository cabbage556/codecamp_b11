/* 

    ----

    문제
    
    회원가입을 성공적으로 개발한 Junny 는
    이번엔 유저들이 해당 아이디로 로그인을 시도하려고 했을 때
    회원가입한 유저가 맞다면 성공메세지를, 아니라면 실패메세지를 띄우는 로직을 작성하려 합니다.

    로그인을 시도한 유저의 아이디를 담고있는 id 와
    유저들의 정보를 담고 있는 배열 users 와
    유저들의 아이디를 해싱하는 해시함수 hash 가 매개변수로 주어졌을 때

    유저들의 아이디를 해싱했을 때, 해당 유저의 정보가 있다면
    "로그인에 성공하였습니다." 를 출력하고
    정보가 없다면 "존재하지 않는 아이디입니다." 를 출력해주세요.
    

    !! users 배열의 문자열 타입의 데이터는 실제로 해당 아이디를 가지는 유저가 존재한다는 의미입니다.

    ----

    입력 예시

    1. signIn(
      "aa",
      [
        undefined,
        {
          a: { prev: null, next: 'aa' },
          aa: { prev: 'a', next: null }
        },
        undefined,
        'b',
        undefined,
        'c'
      ],
        function( str ) { 
          if( str === "a" ) return 1;
          if( str === "aa" ) return 1;
          if( str === "b" ) return 3;
          if( str === "c" ) return 5;
        }
    )

    2. signIn(
      "aaa",
      [
        undefined,
        {
          a: { prev: null, next: 'aa' },
          aa: { prev: 'a', next: null }
        },
        undefined,
        'b',
        undefined,
        'c'
      ],
        function( str ) { 
          if( str === "a" ) return 1;
          if( str === "aa" ) return 1;
          if( str === "b" ) return 3;
          if( str === "c" ) return 5;
        }
    )
    
    ----

    출력 예시

    1. "로그인에 성공하였습니다."

    2. "존재하지 않는 아이디입니다."

*/

function signIn(id, users, hash) {
	// 여기에 코드를 작성하세요.

}

module.exports = signIn;