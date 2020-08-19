import isString from "is/isString";
import {
  string,
  number,
  symbol,
  bigInt,
  object,
  array,
  func,
} from "test/utils";

describe('isString', () => {
  it("should return `true` for strings", () => {
    expect(isString(string)).toBeTruthy();
    expect(isString(Object(string))).toBeTruthy();
  });
  
  it("should return `false` for non-strings", () => {
    expect(isString(number)).toBeFalsy();
    expect(isString(true)).toBeFalsy();
    expect(isString(null)).toBeFalsy();
    expect(isString(void 0)).toBeFalsy();
    expect(isString(symbol)).toBeFalsy();
    expect(isString(bigInt)).toBeFalsy();
    expect(isString(object)).toBeFalsy();
    expect(isString(array)).toBeFalsy();
    expect(isString(func)).toBeFalsy();
  });
});