import isArray from "./";
import {
  string,
  number,
  symbol,
  bigInt,
  object,
  array,
  fn,
} from "@/test-utils";

describe("isArray", () => {
  it("should return `true` for arrays", () => {
    expect(isArray(array)).toBeTruthy();
    expect(isArray(Object(array))).toBeTruthy();
  });

  it("should return `false` for non-arrays", () => {
    expect(isArray(string)).toBeFalsy();
    expect(isArray(number)).toBeFalsy();
    expect(isArray(true)).toBeFalsy();
    expect(isArray(null)).toBeFalsy();
    expect(isArray(void 0)).toBeFalsy();
    expect(isArray(symbol)).toBeFalsy();
    expect(isArray(bigInt)).toBeFalsy();
    expect(isArray(object)).toBeFalsy();
    expect(isArray(fn)).toBeFalsy();
  });
});
