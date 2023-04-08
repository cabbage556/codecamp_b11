const sort_02 = require("../../01_HigherOrderFunction/12_sort_02");

describe("sort_02", () => {
  test(`If [10, 4, 55, 22, 1] and true are given, it should return [1, 4, 10, 22, 55]`, () => {
    expect(
      sort_02(
        [10, 4, 55, 22, 1],
        true
      )
    ).toEqual([1, 4, 10, 22, 55])
  })

  test(`If [10, 4, 55, 22, 1] and false are given, it should return [55, 22, 10, 4, 1]`, () => {
    expect(
      sort_02(
        [10, 4, 55, 22, 1],
        false
      )
    ).toEqual([55, 22, 10, 4, 1])
  })
})