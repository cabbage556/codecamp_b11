const WhatIsRecursion_02 = require("../../02_recursive/02_whatIsRecursion_02");

describe("WhatIsRecursion_02", () => {
  test(`If 6 is given, it should return 6`, () => {
    expect(
      WhatIsRecursion_02(6)
    ).toEqual(12)
  })

  test(`If 20 is given, it should return 40`, () => {
    expect(
      WhatIsRecursion_02(20)
    ).toEqual(40)
  })

  test(`It 0 is given, it should return 0`, () => {
      expect(
        WhatIsRecursion_02(0)
      ).toEqual(0)
    })
})