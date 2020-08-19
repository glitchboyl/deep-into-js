import isBigInt from "is/isBigInt";
import {
  string,
  number,
  symbol,
  bigInt,
  object,
  array,
  func,
} from "test/utils";

describe("isBigInt", () => {
  it("should return `true` for bigInts", () => {
    expect(isBigInt(bigInt)).toBeTruthy();
    expect(isBigInt(Object(bigInt))).toBeTruthy();
  });

  it("should return `false` for non-bigInts", () => {
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
});
