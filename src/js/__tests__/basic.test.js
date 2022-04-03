import Validator from "../app";

test.each([
  ["Nicko_596_S", true],
  ["Nicko5934S", false],
  ["12Nicko59S", false],
  ["Nicko59S-_", false],
  ["Нicko59S5ф", false],
])("show test example", (data, equal) => {
  expect(Validator.validateUsername(data)).toEqual(equal);
});
