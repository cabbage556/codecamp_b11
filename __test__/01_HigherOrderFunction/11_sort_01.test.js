const sort_01 = require("../../01_HigherOrderFunction/11_sort_01");

describe("sort_01", () => {
  test(`If [10, 4, 55, 22, 1] and true are given, it should return [1, 4, 10, 22, 55]`, () => {
    expect(
      sort_01(
        [10, 4, 55, 22, 1],
        true
      )
    ).toEqual([1, 4, 10, 22, 55])
  })

  test(`If [10, 4, 55, 22, 1] and false are given, it should return [55, 22, 10, 4, 1]`, () => {
    expect(
      sort_01(
        [10, 4, 55, 22, 1],
        false
      )
    ).toEqual([55, 22, 10, 4, 1])
  })
})