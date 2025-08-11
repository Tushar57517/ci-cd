const {greet, goodBye} = require("./main.js");

test("should return hello world ", () => {
  expect(greet()).toBe("Hello, World");
});

test("should return good bye ", () => {
  expect(goodBye()).toBe("good bye");
});

