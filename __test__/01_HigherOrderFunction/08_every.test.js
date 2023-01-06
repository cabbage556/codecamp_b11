const every = require("../../01_HigherOrderFunction/08_every");

describe("every", () => {
  test(`Return true if all elements are greater than 1, or false if not`, () => {
      expect(
        every(
          function( data ) { return data > 1 },
          [2, 3, 4, 5, 6]
        )
      ).toEqual(true)
    })

  test(`Return true if all elements are greater than 1, or false if not`, () => {
    expect(
      every(
        function( data ) { return data > 1 },
        [2, 2, 2, 1, 5]
      )
    ).toEqual(false)
  })
})