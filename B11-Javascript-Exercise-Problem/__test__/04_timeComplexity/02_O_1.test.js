const O_1 = require("../../04_timeComplexity/02_O_1");

describe("O_1", () => {
    test(`If [1, 2, 3, 4, 5], 3 is given, it should return 4`, () => {
      expect(
        O_1([1, 2, 3, 4, 5], 3)
      ).toEqual(4)
    })

    test(`If [1, 2, 3, 4, 5, 6, 7, 8], 2 is given, it should return 3`, () => {
      expect(
        O_1([1, 2, 3, 4, 5, 6, 7, 8], 2)
      ).toEqual(3)
    })

    test(`If [1, 1, 1], 6 is given, it should return -1`, () => {
      expect(
        O_1([1, 1, 1], 6)
      ).toEqual(-1)
    })
})