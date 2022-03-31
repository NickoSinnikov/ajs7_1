import Validator from "../app";

test("show test example", () => {
  let equal = true;
  let data = "Nicko_596_S";
  expect(Validator.validateUsername(data)).toEqual(equal);
});

test("show test example", () => {
  let equal = false;
  let data = "Nicko5934S";
  expect(Validator.validateUsername(data)).toEqual(equal);
});

test("show test example", () => {
  let equal = false;
  let data = "12Nicko59S";
  expect(Validator.validateUsername(data)).toEqual(equal);
});

test("show test example", () => {
  let equal = false;
  let data = "Nicko59S-_";
  expect(Validator.validateUsername(data)).toEqual(equal);
});

test("show test example", () => {
  let equal = false;
  let data = "Nicko59S5";
  expect(Validator.validateUsername(data)).toEqual(equal);
});
