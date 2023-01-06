const reduce_05 = require("../../01_HigherOrderFunction/17_reduce_05");

describe("reduce_05", () => {
  test(`should return { name : "Gray", age : 52  }`, () => {
    expect(
      reduce_05(
        [
          { name : "Aiden", age : 33 },
          { name : "Gray", age : 52 },
          { name : "Junny", age : 9 },
          { name : "Oliver", age : 11 }
      ],
      {}
      )
    ).toEqual({ name : "Gray", age : 52  })
  })

  test(`should return { name : "Gray", age : 52  }`, () => {
    expect(
      reduce_05(
        [
          { name : "Aiden", age : 33 },
          { name : "Gray", age : 52 },
          { name : "Junny", age : 9 },
          { name : "Aaron", age : 52 },
          { name : "Oliver", age : 11 }
      ],
      {}
      )
    ).toEqual({ name : "Gray", age : 52  })
  })
})