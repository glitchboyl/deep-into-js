import isBoolean from "is/isBoolean";
import {
  string,
  number,
  symbol,
  bigint,
  object,
  array,
  func,
} from "test/utils";

test("should return `true` for booleans", () => {
  expect(isBoolean(true)).toBeTruthy();
  expect(isBoolean(false)).toBeTruthy();
  expect(isBoolean(Object(true))).toBeTruthy();
  expect(isBoolean(Object(false))).toBeTruthy();
});

test("should return `false` for non-booleans", () => {
  expect(isBoolean(string)).toBeFalsy();
  expect(isBoolean(number)).toBeFalsy();
  expect(isBoolean(null)).toBeFalsy();
  expect(isBoolean(void 0)).toBeFalsy();
  expect(isBoolean(symbol)).toBeFalsy();
  expect(isBoolean(bigint)).toBeFalsy();
  expect(isBoolean(object)).toBeFalsy();
  expect(isBoolean(array)).toBeFalsy();
  expect(isBoolean(func)).toBeFalsy();
});