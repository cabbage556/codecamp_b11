const filter_02 = require("../../01_HigherOrderFunction/07_filter_02");

describe("filter_02", () => {
  test(`If [1, 2, 3, 4, 5, 6] is given, it should return [2, 4, 6] (Get even numbers only)`, () => {
      expect(
        filter_02(
          [1, 2, 3, 4, 5, 6]
        )
      ).toEqual([2, 4, 6])
    })
})