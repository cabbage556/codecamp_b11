const reduce_04 = require("../../01_HigherOrderFunction/16_reduce_04");

describe("reduce_04", () => {
  test(`If [ ["철수", 10], ["영희", 11], ["훈이", 9], ["맹구", 10] ] is given, it should return [
    { name : "철수", age : 10 }, 
    { name : "영희", age : 11 }, 
    { name : "훈이", age : 9 }, 
    { name : "맹구", age : 10 }, 
  ]`, () => {
    expect(
      reduce_04(
        [ ["철수", 10], ["영희", 11], ["훈이", 9], ["맹구", 10] ]
      )
    ).toEqual([
      { name : "철수", age : 10 }, 
      { name : "영희", age : 11 }, 
      { name : "훈이", age : 9 }, 
      { name : "맹구", age : 10 }, 
    ])
  })

  test(`If [ ["철수", 10], ["영희", 11], ["훈이", 9], ["맹구", 10] ] and [] is given, it should return [
    { name : "철수", age : 10 }, 
    { name : "영희", age : 11 }, 
    { name : "훈이", age : 9 }, 
    { name : "맹구", age : 10 }, 
  ]`, () => {
    expect(
      reduce_04(
        [ ["철수", 10], ["영희", 11], ["훈이", 9], ["맹구", 10] ],
        []
      )
    ).toEqual([
      { name : "철수", age : 10 }, 
      { name : "영희", age : 11 }, 
      { name : "훈이", age : 9 }, 
      { name : "맹구", age : 10 }, 
    ])
  })
})