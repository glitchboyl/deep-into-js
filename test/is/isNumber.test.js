import isNumber from "is/isNumber";
import {
  string,
  number,
  symbol,
  bigInt,
  object,
  array,
  func,
} from "test/utils";

describe('isNumber', () => {
  it("should return `true` for numbers", () => {
    expect(isNumber(number)).toBeTruthy();
    expect(isNumber(Object(number))).toBeTruthy();
    expect(isNumber(NaN)).toBeTruthy();
  });
  
  it("should return `false` for non-numbers", () => {
    expect(isNumber(string)).toBeFalsy();
    expect(isNumber(true)).toBeFalsy();
    expect(isNumber(null)).toBeFalsy();
    expect(isNumber(void 0)).toBeFalsy();
    expect(isNumber(symbol)).toBeFalsy();
    expect(isNumber(bigInt)).toBeFalsy();
    expect(isNumber(object)).toBeFalsy();
    expect(isNumber(array)).toBeFalsy();
    expect(isNumber(func)).toBeFalsy();
  });
});