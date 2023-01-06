const whatIsHoF_01 = require("../../01_HigherOrderFunction/01_whatIsHoF_01");

describe("whatIsHoF_01", () => {
    test(`If [0, 1, 2, 3, 4] is given, it should return [1, 2, 3, 4, 5]`, () => {
      expect(
        whatIsHoF_01([0, 1, 2, 3, 4])
      ).toEqual([1, 2, 3, 4, 5])
    })

    test(`If [-2, -1, 0, 1, 2] is given, it should return [-1, 0, 1, 2, 3]`, () => {
        expect(
          whatIsHoF_01([-2, -1, 0, 1, 2])
        ).toEqual([-1, 0, 1, 2, 3])
      })

})