const forEach = require("../../01_HigherOrderFunction/03_forEach");
global.console = {
  warn : jest.fn(),
  log : jest.fn()
}

describe("forEach", () => {
  let outputData = "";
  const storeLog = inputs => (outputData += inputs);

  console["log"] = jest.fn(storeLog);
  require("../../01_HigherOrderFunction/03_forEach");

  test(`should return "1-2-3-4-5-"`, () => {
    forEach(
      function( data ) { return data + "-" }, 
      [1, 2, 3, 4, 5]
    )
    expect(outputData).toBe("1-2-3-4-5-");
  });
})