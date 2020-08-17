import isString from "is/isString";
import {
  string,
  number,
  symbol,
  bigint,
  object,
  array,
  func,
} from "test/utils";

test("should return `true` for strings", () => {
  expect(isString(string)).toBeTruthy();
  expect(isString(Object(string))).toBeTruthy();
});

test("should return `false` for non-strings", () => {
  expect(isString(number)).toBeFalsy();
  expect(isString(true)).toBeFalsy();
  expect(isString(null)).toBeFalsy();
  expect(isString(void 0)).toBeFalsy();
  expect(isString(symbol)).toBeFalsy();
  expect(isString(bigint)).toBeFalsy();
  expect(isString(object)).toBeFalsy();
  expect(isString(array)).toBeFalsy();
  expect(isString(func)).toBeFalsy();
});