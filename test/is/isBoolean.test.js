import isBoolean from "is/isBoolean";
import {
  string,
  number,
  symbol,
  bigInt,
  object,
  array,
  func,
} from "test/utils";

describe("isBoolean", () => {
  it("should return `true` for booleans", () => {
    expect(isBoolean(true)).toBeTruthy();
    expect(isBoolean(false)).toBeTruthy();
    expect(isBoolean(Object(true))).toBeTruthy();
    expect(isBoolean(Object(false))).toBeTruthy();
  });

  it("should return `false` for non-booleans", () => {
    expect(isBoolean(string)).toBeFalsy();
    expect(isBoolean(number)).toBeFalsy();
    expect(isBoolean(null)).toBeFalsy();
    expect(isBoolean(void 0)).toBeFalsy();
    expect(isBoolean(symbol)).toBeFalsy();
    expect(isBoolean(bigInt)).toBeFalsy();
    expect(isBoolean(object)).toBeFalsy();
    expect(isBoolean(array)).toBeFalsy();
    expect(isBoolean(func)).toBeFalsy();
  });
});
