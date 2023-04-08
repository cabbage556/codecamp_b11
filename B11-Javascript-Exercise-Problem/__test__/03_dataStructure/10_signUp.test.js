const signUp = require("../../03_dataStructure/10_signUp");

describe("signUp", () => {
  test(`should return [ <1 empty item>, 'a', <1 empty item>, 'b', <1 empty item>, 'c' ]`, () => {
    expect(
      signUp(
        ["a", "b", "c"],
          function( str ) { 
            if( str === "a" ) return 1;
            if( str === "aa" ) return 1;
            if( str === "b" ) return 3;
            if( str === "c" ) return 5;
          }
      )
    ).toEqual(
      [ undefined, 'a', undefined, 'b', undefined, 'c' ]
    )
  })

  test(`should return [
    <1 empty item>,
    {
      a: { prev: null, next: 'aa' },
      aa: { prev: 'a', next: null }
    },
    <1 empty item>,
    'b',
    <1 empty item>,
    'c'
  ]`, () => {
    expect(
      signUp(
        ["a", "b", "c", "aa"],
        function( str ) { 
          if( str === "a" ) return 1;
          if( str === "aa" ) return 1;
          if( str === "b" ) return 3;
          if( str === "c" ) return 5;
        }
      )
    ).toEqual(
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
      ]
    )
  })
})