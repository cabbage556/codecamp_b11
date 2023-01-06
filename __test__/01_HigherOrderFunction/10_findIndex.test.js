const findIndex = require("../../01_HigherOrderFunction/10_findIndex");

describe("findIndex", () => {
  test(`should return 3`, () => {
      expect(
        findIndex(
          function( data ) { return data % 2 === 0 },
          [1, 3, 5, 4, 9, 10]
        )
      ).toEqual(3)
    })

  test(`should return -1`, () => {
    expect(
      findIndex(
        function( data ) { return data % 2 === 0 },
        [1, 3, 5, 7, 9]
      )
    ).toEqual(-1)
  })
})