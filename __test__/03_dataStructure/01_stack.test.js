const stack = require("../../03_dataStructure/01_stack");

describe("stack", () => {
    test(`If [1, 2, 3, 4, 5] and 3 are given, it should return [ [1, 2], [5, 4, 3] ]`, () => {
      expect(
        stack([1, 2, 3, 4, 5], 3)
      ).toEqual([ [1, 2], [5, 4, 3] ])
    })

    test(`If [1, 2, 3, 4, 5] and 6 are given, it should return [ [1, 2, 3, 4, 5], [] ]`, () => {
      expect(
        stack([1, 2, 3, 4, 5], 6)
      ).toEqual([ [1, 2, 3, 4, 5], [] ])
    })

    test(`If [1, 2, 3, 4, 5] and 2 are given, it should return [ [1], [5, 4, 3, 2] ]`, () => {
      expect(
        stack([1, 2, 3, 4, 5], 2)
      ).toEqual([ [1], [5, 4, 3, 2] ])
    })

    test(`If [1, 2, 3, 4, 5] and 1 are given, it should return [ [], [5, 4, 3, 2, 1] ]`, () => {
      expect(
        stack([1, 2, 3, 4, 5], 1)
      ).toEqual([ [], [5, 4, 3, 2, 1] ])
    })

    test(`If [1, 2, 3, 4, 5] and 5 are given, it should return [ [1, 2, 3, 4], [5] ]`, () => {
      expect(
        stack([1, 2, 3, 4, 5], 5)
      ).toEqual([ [1, 2, 3, 4], [5] ])
    })
})