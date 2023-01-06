const myName = require("../../03_dataStructure/05_myName");

describe("myName", () => {
    test(`If '철수' is given, it should return "철수"`, () => {
      expect(
        myName("철수")
      ).toEqual("철수")
    })

    test(`If '철수', '훈이' is given, it should return "훈이"`, () => {
      expect(
        myName("철수", "훈이")
      ).toEqual("훈이")
    })
})