const reduce_03 = require("../../01_HigherOrderFunction/15_reduce_03");

describe("reduce_03", () => {
  test(`should return "코딩 공부를 열심히 하고 있습니다."`, () => {
    expect(
      reduce_03(
        function( acc, cur ) { return acc + cur },
        ["코딩 공부를", " 열심히", " 하고 있습니다."]
      )
    ).toEqual("코딩 공부를 열심히 하고 있습니다.")
  })

  test(`should return "제 이름은 코드캠프 입니다. 취미는 코딩입니다."`, () => {
    expect(
      reduce_03(
        function( acc, cur ) { return acc + cur },
        [" 코드캠프 입니다.", " 취미는", " 코딩입니다."],
        "제 이름은"
      )
    ).toEqual("제 이름은 코드캠프 입니다. 취미는 코딩입니다.")
  })
})