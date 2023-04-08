const linkedList_01 = require("../../03_dataStructure/07_linkedList_01");

describe("linkedList_01", () => {
    test(`If ["철수", "훈이", "영희", "맹구"], [ "Remove 훈이", "Insert Junny" ] is given, it should return {
      철수 : { next : "영희" },
      영희 : { next : "Junny" },
      Junny : { next : "맹구" },
      맹구 : { next : null }
    }`, () => {
      expect(
        linkedList_01(
          ["철수", "훈이", "영희", "맹구"],
          [ "Remove 훈이", "Insert Junny" ]
        )
      ).toEqual({
        철수 : { next : "영희" },
        영희 : { next : "맹구" },
        맹구 : { next : "Junny" },
        Junny : { next : null }
      })
    })

    test(`If ["철수", "훈이", "영희", "맹구"], [ "Remove 훈이", "Insert Junny", "Remove 영희", "Remove 맹구" ] is given, it should return {
      '철수': { next: 'Junny' }, 
      Junny: { next: null }
    }`, () => {
      expect(
        linkedList_01(
          ["철수", "훈이", "영희", "맹구"],
          [ "Remove 훈이", "Insert Junny", "Remove 영희", "Remove 맹구" ]
        )
      ).toEqual({
        '철수': { next: 'Junny' }, 
        Junny: { next: null }
      })
    })
})