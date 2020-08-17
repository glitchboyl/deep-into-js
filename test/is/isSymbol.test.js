import isSymbol from "is/isSymbol";
import {
  string,
  number,
  symbol,
  bigint,
  object,
  array,
  func,
} from "test/utils";

test("should return `true` for symbols", () => {
  expect(isSymbol(symbol)).toBeTruthy();
  expect(isSymbol(Object(symbol))).toBeTruthy();
});

test("should return `false` for non-symbols", () => {
  expect(isSymbol(string)).toBeFalsy();
  expect(isSymbol(number)).toBeFalsy();
  expect(isSymbol(false)).toBeFalsy();
  expect(isSymbol(null)).toBeFalsy();
  expect(isSymbol(void 0)).toBeFalsy();
  expect(isSymbol(bigint)).toBeFalsy();
  expect(isSymbol(object)).toBeFalsy();
  expect(isSymbol(array)).toBeFalsy();
  expect(isSymbol(func)).toBeFalsy();
});