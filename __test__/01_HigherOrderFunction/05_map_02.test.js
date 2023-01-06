const map_02 = require("../../01_HigherOrderFunction/05_map_02");

describe("map_02", () => {
  test(`should return ["철수님", "훈이님", "영희님", "맹구님"]`, () => {
      expect(
        map_02(
          ["철수", "훈이", "영희", "맹구"]
        )
      ).toEqual(["철수님", "훈이님", "영희님", "맹구님"])
    })
})