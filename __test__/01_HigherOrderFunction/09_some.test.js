const some = require("../../01_HigherOrderFunction/09_some");

describe("some", () => {
  test(`If even one element is divided by 10, it return true. otherwise, false`, () => {
      expect(
        some(
          function( data ) { return data % 10 === 0 },
          [11, 12, 13, 14, 10]
        )
      ).toEqual(true)
    })

  test(`If even one element is divided by 10, it return true. otherwise, false`, () => {
    expect(
      some(
        function( data ) { return data % 10 === 0 },
        [11, 12, 13, 14, 15]
      )
    ).toEqual(false)
  })
})