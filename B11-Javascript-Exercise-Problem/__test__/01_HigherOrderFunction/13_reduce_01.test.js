const reduce_01 = require("../../01_HigherOrderFunction/13_reduce_01");

describe("reduce_01", () => {
  test(`should return 15`, () => {
    expect(
      reduce_01(
        function( acc, cur ) { return acc + cur },
        [1, 2, 3, 4, 5]
      )
    ).toEqual(15)
  })

  test(`should return 0`, () => {
    expect(
      reduce_01(
        function( acc, cur ) { return acc - cur },
        [1, 2, 3, 4, 5],
        15
      )
    ).toEqual(0)
  })
})