const map_01 = require("../../01_HigherOrderFunction/04_map_01");

describe("map_01", () => {
    test(`should return ["철수님", "훈이님", "영희님", "맹구님"]`, () => {
      expect(
        map_01(
          function( data ) { return data + "님" },
          ["철수", "훈이", "영희", "맹구"]
        )
      ).toEqual(["철수님", "훈이님", "영희님", "맹구님"])
    })

    test(`should return [true, true, false, true]`, () => {
      expect(
        map_01(
          function( data ) { return !data },
          [false, false, true, false]
        )
      ).toEqual([true, true, false, true])
    })
})