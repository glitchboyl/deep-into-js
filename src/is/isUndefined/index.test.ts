import isUndefined from "./";
import {
  string,
  number,
  symbol,
  bigInt,
  object,
  array,
  fn,
} from "@/test-utils";

describe("isUndefined", () => {
  it("should return `true` for `undefined` values", () => {
    expect(isUndefined()).toBeTruthy();
    expect(isUndefined(void 0)).toBeTruthy();
  });

  it("should return `false` for non `null` values", () => {
    expect(isUndefined(string)).toBeFalsy();
    expect(isUndefined(number)).toBeFalsy();
    expect(isUndefined(false)).toBeFalsy();
    expect(isUndefined(null)).toBeFalsy();
    expect(isUndefined(symbol)).toBeFalsy();
    expect(isUndefined(bigInt)).toBeFalsy();
    expect(isUndefined(object)).toBeFalsy();
    expect(isUndefined(array)).toBeFalsy();
    expect(isUndefined(fn)).toBeFalsy();
  });
});
