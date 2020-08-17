import isNull from "is/isNull";
import {
  string,
  number,
  symbol,
  bigint,
  object,
  array,
  func,
} from "test/utils";

test("should return `true` for `null` values", () => {
  expect(isNull(null)).toBeTruthy();
});

test("should return `false` for non `null` values", () => {
  expect(isNull(string)).toBeFalsy();
  expect(isNull(number)).toBeFalsy();
  expect(isNull(false)).toBeFalsy();
  expect(isNull(void 0)).toBeFalsy();
  expect(isNull(symbol)).toBeFalsy();
  expect(isNull(bigint)).toBeFalsy();
  expect(isNull(object)).toBeFalsy();
  expect(isNull(array)).toBeFalsy();
  expect(isNull(func)).toBeFalsy();
});