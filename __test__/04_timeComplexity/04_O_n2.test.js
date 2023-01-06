const O_n2 = require("../../04_timeComplexity/04_O_n2");

describe("O_n2", () => {
    test(`If [1, 2, 3, 4] is given, it should return [ 3, 4, 5, 6, 7 ]`, () => {
      expect(
        O_n2( [1, 2, 3, 4] )
      ).toEqual([ 3, 4, 5, 6, 7 ])
    })

    test(`If [10, -6, 2, 1, 0] is given, it should return [ 4, 12, 11, 10, -4, -5, -6, 3, 2, 1 ]`, () => {
      expect(
        O_n2( [10, -6, 2, 1, 0] )
      ).toEqual([ 4, 12, 11, 10, -4, -5, -6, 3, 2, 1 ])
    })
})