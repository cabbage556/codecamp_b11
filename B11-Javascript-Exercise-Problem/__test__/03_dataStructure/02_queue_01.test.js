const queue_01 = require("../../03_dataStructure/02_queue_01");

describe("queue_01", () => {
    test(`If [ [1, 2], [3, 4], [5, 6, 7], [8], ["Me"], [9, 10] ] is given, it should return [4, 8]`, () => {
      expect(
        queue_01([ [1, 2], [3, 4], [5, 6, 7], [8], ["Me"], [9, 10] ])
      ).toEqual([4, 8])
    })

    test(`If [ [1, 2, 3, 4, 5, 6], ["Me"] ] is given, it should return [1, 6]`, () => {
      expect(
        queue_01([ [1, 2, 3, 4, 5, 6], ["Me"] ])
      ).toEqual([1, 6])
    })
})