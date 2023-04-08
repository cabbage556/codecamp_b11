const O_n = require("../../04_timeComplexity/03_O_n");

describe("O_n", () => {
    test(`If [10, 9, 4, 8, 7, 6, 2], 6 is given, it should return 5`, () => {
      expect(
        O_n( [10, 9, 4, 8, 7, 6, 2], 6 )
      ).toEqual(5)
    })

    test(`If [99, 126, 87, 39, 0, 101, 55], 87 is given, it should return 2`, () => {
      expect(
        O_n( [99, 126, 87, 39, 0, 101, 55], 87 )
      ).toEqual(2)
    })
})