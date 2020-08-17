import isObjectLike from "is/isObjectLike";
import {
  string,
  number,
  symbol,
  bigint,
  object,
  array,
  func,
} from "test/utils";

test("should return `true` for object-like", () => {
  expect(isObjectLike(object)).toBeTruthy();
  expect(isObjectLike(array)).toBeTruthy();
  expect(isObjectLike(Object(string))).toBeTruthy();
  expect(isObjectLike(Object(number))).toBeTruthy();
  expect(isObjectLike(Object(false))).toBeTruthy();
  expect(isObjectLike(Object(symbol))).toBeTruthy();
  expect(isObjectLike(Object(bigint))).toBeTruthy();
  expect(isObjectLike(new Date())).toBeTruthy();
  expect(isObjectLike(new Error())).toBeTruthy();
});

test("should return `false` for non-object-like", () => {
  expect(isObjectLike(string)).toBeFalsy();
  expect(isObjectLike(number)).toBeFalsy();
  expect(isObjectLike(true)).toBeFalsy();
  expect(isObjectLike(null)).toBeFalsy();
  expect(isObjectLike(void 0)).toBeFalsy();
  expect(isObjectLike(symbol)).toBeFalsy();
  expect(isObjectLike(bigint)).toBeFalsy();
  expect(isObjectLike(func)).toBeFalsy();
});
