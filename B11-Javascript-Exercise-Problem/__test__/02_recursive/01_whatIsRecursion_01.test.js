const whatIsHoF_01 = require("../../02_recursive/01_whatIsRecursion_01");

describe("whatIsRecursion_01", () => {
    test(`If 6 is given, it should return 6`, () => {
      expect(
        whatIsHoF_01(6)
      ).toEqual(12)
    })

  test(`If 0 is given, it should return 0`, () => {
      expect(
        whatIsHoF_01(0)
      ).toEqual(0)
    })
})