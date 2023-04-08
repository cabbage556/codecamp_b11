const queue_02 = require("../../03_dataStructure/03_queue_02");

describe("queue_02", () => {
    test(`If [ [1, 2, 3], [4, 5], [6, 7], ["Junny", "Hoony"], [8] ] and 4 are given, it should return 3`, () => {
      expect(
        queue_02(
          [ [1, 2, 3], [4, 5], [6, 7], ["Junny", "Hoony"], [8] ], 
          4
        )
      ).toEqual(3)
    })

    test(`If [ [1, 2, 3], [4, 5], [6, 7], ["Junny", "Hoony"], [8] ] and 100 is given, it should return 1`, () => {
      expect(
        queue_02(
          [ [1, 2, 3], [4, 5], [6, 7], ["Junny", "Hoony"], [8] ], 
          100
        )
      ).toEqual(1)
    })

    test(`If [ [1, 2, 3], [4, 5], [6, 7], ["Junny", "Hoony"], [8] ] and 3 is given, it should return 3`, () => {
      expect(
        queue_02(
          [ [1, 2, 3], [4, 5], [6, 7], ["Junny", "Hoony"], [8] ], 
          3
        )
      ).toEqual(3)
    })

    test(`If [ [1, 2, 3], [4, 5], [6, 7], ["Junny", "Hoony"], [8] ] and 2 is given, it should return 5`, () => {
      expect(
        queue_02(
          [ [1, 2, 3], [4, 5], [6, 7], ["Junny", "Hoony"], [8] ], 
          2
        )
      ).toEqual(5)
    })
})