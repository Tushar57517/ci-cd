const {sum} = require("./index.js")

test("add 2+3 to be 5 ", () => {
  expect(sum(2, 3)).toBe(5);
});
