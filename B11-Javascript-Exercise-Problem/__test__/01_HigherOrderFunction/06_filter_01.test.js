const filter_01 = require("../../01_HigherOrderFunction/06_filter_01");

describe("filter_01", () => {
  test(`Get even numbers only`, () => {
      expect(
        filter_01(
          function( data ) { return data % 2 === 0 },
          [1, 2, 3, 4, 5, 6]
        )
      ).toEqual([2, 4, 6])
    })

  test(`Get only strings with even length`, () => {
    expect(
      filter_01(
        function( data ) { return data.length % 2 === 0 },
        ["a", "aa", "aaa", "aaaa", "aaaaa"]
      )
    ).toEqual(["aa", "aaaa"])
  })

  test(`Get only data whose 'name's value is 'Junny'`, () => {
    expect(
      filter_01(
        function( data ) { return data.name === "Junny" },
        [{ name : "Junny" }, 
        { name : "Hoony" },
        { name : "Yoony" },
        { name : "Joon" },]
      )
    ).toEqual([ { name : "Junny" } ])
  })
})