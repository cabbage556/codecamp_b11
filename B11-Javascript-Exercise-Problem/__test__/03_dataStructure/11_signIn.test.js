const signIn = require("../../03_dataStructure/11_signIn");

describe("signIn", () => {
  test(`should return "로그인에 성공하였습니다."`, () => {
    expect(
      signIn(
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
    ).toEqual("로그인에 성공하였습니다.")
  })

  test(`should return "존재하지 않는 아이디입니다."`, () => {
    expect(
      signIn(
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
    ).toEqual("존재하지 않는 아이디입니다.")
  })
})