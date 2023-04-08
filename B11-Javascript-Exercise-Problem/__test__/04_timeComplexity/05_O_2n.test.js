const O_2n = require("../../04_timeComplexity/05_O_2n");

describe("O_2n", () => {
    test(`If 3 is given, it should return 2`, () => {
      expect(
        O_2n( 3 )
      ).toEqual(2)
    })

    test(`If 8 is given, it should return 21`, () => {
      expect(
        O_2n( 8 )
      ).toEqual(21)
    })

    test(`If 55 is given, it should return 139583862445`, () => {
      expect(
        O_2n( 55 )
      ).toEqual(139583862445)
    })
})