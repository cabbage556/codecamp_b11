const linkedList_02 = require("../../03_dataStructure/08_linkedList_02");

describe("linkedList_02", () => {
    test(`If ["철수", "훈이", "영희", "맹구"], [ "Remove 훈이", "Insert Junny" ] is given, it should return {
      철수 : { next : "영희", prev : null },
      영희 : { next : "맹구", prev : "철수" },
      맹구 : { next : "Junny", prev : "영희" },
      Junny : { next : null, prev : "맹구" },
    }`, () => {
      expect(
        linkedList_02(
          ["철수", "훈이", "영희", "맹구"],
          [ "Remove 훈이", "Insert Junny" ]
        )
      ).toEqual({
        철수 : { next : "영희", prev : null },
        영희 : { next : "맹구", prev : "철수" },
        맹구 : { next : "Junny", prev : "영희" },
        Junny : { next : null, prev : "맹구" },
      })
    })

    test(`If ["철수", "훈이", "영희", "맹구"], [ "Remove 훈이", "Insert Junny", "Remove 영희", "Remove 맹구" ] is given, it should return {
      '철수': { next: 'Junny', prev : null }, 
      Junny: { next: null, prev : "철수" }
    }`, () => {
      expect(
        linkedList_02(
          ["철수", "훈이", "영희", "맹구"],
          [ "Remove 훈이", "Insert Junny", "Remove 영희", "Remove 맹구" ]
        )
      ).toEqual({
        '철수': { next: 'Junny', prev : null }, 
        Junny: { next: null, prev : "철수" }
      })
    })
})