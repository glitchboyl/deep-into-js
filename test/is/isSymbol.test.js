import isSymbol from "is/isSymbol";
import {
  string,
  number,
  symbol,
  bigInt,
  object,
  array,
  func,
} from "test/utils";

describe('isSymbol', () => {
  it("should return `true` for symbols", () => {
    expect(isSymbol(symbol)).toBeTruthy();
    expect(isSymbol(Object(symbol))).toBeTruthy();
  });
  
  it("should return `false` for non-symbols", () => {
    expect(isSymbol(string)).toBeFalsy();
    expect(isSymbol(number)).toBeFalsy();
    expect(isSymbol(false)).toBeFalsy();
    expect(isSymbol(null)).toBeFalsy();
    expect(isSymbol(void 0)).toBeFalsy();
    expect(isSymbol(bigInt)).toBeFalsy();
    expect(isSymbol(object)).toBeFalsy();
    expect(isSymbol(array)).toBeFalsy();
    expect(isSymbol(func)).toBeFalsy();
  });
});