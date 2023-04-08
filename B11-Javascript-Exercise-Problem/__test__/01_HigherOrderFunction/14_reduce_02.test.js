const reduce_02 = require("../../01_HigherOrderFunction/14_reduce_02");

describe("reduce_02", () => {
  test(`If [1, 2, 3, 4, 5] is given, it should return 15`, () => {
    expect(
      reduce_02(
        [1, 2, 3, 4, 5]
      )
    ).toEqual(15)
  })

  test(`If [-1, -2, -3, -4, -5] and 15 are given, it should return 0`, () => {
    expect(
      reduce_02(
        [-1, -2, -3, -4, -5],
        15
      )
    ).toEqual(0)
  })

  test(`If [2, -8, -1] and 5 are given, it should return -2`, () => {
    expect(
      reduce_02(
        [2, -8, -1],
        5
      )
    ).toEqual(-2)
  })

  test(`If ["1", -6, "-10", "+20"] and 0 is given, it should return "01-6-10+20"`, () => {
    expect(
      reduce_02(
        ["1", -6, "-10", "+20"],
        0
      )
    ).toEqual("01-6-10+20")
  })
})