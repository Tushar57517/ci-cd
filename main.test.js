const greet = require("./main.js");

test("should return hello world ", () => {
  expect(greet()).toBe("Hello, World");
});
