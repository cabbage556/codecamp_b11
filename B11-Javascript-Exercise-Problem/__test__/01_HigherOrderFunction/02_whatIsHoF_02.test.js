const whatIsHoF_02 = require("../../01_HigherOrderFunction/02_whatIsHoF_02");

describe("whatIsHoF_02", () => {
    test(`should return ["aa", "ba", "ca", "da", "ea"]`, () => {
      expect(
        whatIsHoF_02(
          function(data) { return data + "a" },
          ["a", "b", "c", "d", "e"]
        )
      ).toEqual(["aa", "ba", "ca", "da", "ea"])
    })

    test(`should return [0, 9, 6, 4, 9]`, () => {
      expect(
        whatIsHoF_02(
          function(data) { return data - 1 },
          [1, 10, 7, 5, 10]
        )
      ).toEqual([0, 9, 6, 4, 9])
    })
})