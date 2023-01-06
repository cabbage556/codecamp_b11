const thisIsOnlySeven = require("../../02_recursive/04_thisIsOnlySeven");

describe("thisIsOnlySeven", () => {
  test(`If '1234567890' is given, it should return 9`, () => {
    expect(
      thisIsOnlySeven("1234567890")
    ).toEqual(9)
  })

  test(`If '711233440' is given, it should return 8`, () => {
    expect(
      thisIsOnlySeven("711233440")
    ).toEqual(8)
  })
})