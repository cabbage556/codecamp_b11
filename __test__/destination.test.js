const destination = require("../src/destination");

describe("destination", () => {
  test(`should return 'Sao Paulo'`, () => {
    expect(
      destination([
        ["London", "New York"],
        ["New York", "Lima"],
        ["Lima", "Sao Paulo"],
      ])
    ).toEqual("Sao Paulo");
  });

  test(`should return 'Busan'`, () => {
    expect(
      destination([
        ["Kwangju", "Busan"],
        ["Seoul", "Ansan"],
        ["Ansan", "Kwangju"],
      ])
    ).toEqual("Busan");
  });

  test(`should return 'Gyeongju'`, () => {
    expect(
      destination([
        ["Kwangju", "Gyeongju"],
        ["Seoul", "Ansan"],
        ["Ansan", "Kwangju"],
      ])
    ).toEqual("Gyeongju");
  });

  test(`should return 'Suwon'`, () => {
    expect(
      destination([
        ["Kwangju", "Seoul"],
        ["Seoul", "Ansan"],
        ["Ansan", "Suwon"],
      ])
    ).toEqual("Suwon");
  });

  test(`should return 'A'`, () => {
    expect(
      destination([
        ["B", "C"],
        ["D", "B"],
        ["C", "A"],
      ])
    ).toEqual("A");
  });
});
