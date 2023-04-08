const thisIsSeven = require("../../02_recursive/03_thisIsSeven");

describe("thisIsSeven", () => {
  test(`If '1234567890' is given, it should return 6`, () => {
    expect(
      thisIsSeven("1234567890")
    ).toEqual(6)
  })

  test(`If '7fgaab' is given, should return 0`, () => {
    expect(
      thisIsSeven("7fgaab")
    ).toEqual(0)
  })
})