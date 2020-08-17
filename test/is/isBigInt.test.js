import isBigInt from "is/isBigInt";
import {
  string,
  number,
  symbol,
  bigint,
  object,
  array,
  func,
} from "test/utils";

test("should return `true` for bigints", () => {
  expect(isBigInt(bigint)).toBeTruthy();
  expect(isBigInt(Object(bigint))).toBeTruthy();
});

test("should return `false` for non-bigints", () => {
  expect(isBigInt(string)).toBeFalsy();
  expect(isBigInt(number)).toBeFalsy();
  expect(isBigInt(true)).toBeFalsy();
  expect(isBigInt(null)).toBeFalsy();
  expect(isBigInt(void 0)).toBeFalsy();
  expect(isBigInt(symbol)).toBeFalsy();
  expect(isBigInt(object)).toBeFalsy();
  expect(isBigInt(array)).toBeFalsy();
  expect(isBigInt(func)).toBeFalsy();
});