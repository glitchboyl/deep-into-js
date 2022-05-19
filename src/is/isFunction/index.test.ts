import isFunction from "./";
import {
  string,
  number,
  symbol,
  bigInt,
  object,
  array,
  fn,
  asyncFn,
  generator,
  fnInstance,
  classInstance,
  regExp,
} from "@/test-utils";

describe("isFunction", () => {
  it("should return `true` for functions", () => {
    expect(isFunction(fn)).toBeTruthy();
    expect(isFunction(asyncFn)).toBeTruthy();
    expect(isFunction(generator)).toBeTruthy();
    expect(isFunction(fnInstance)).toBeTruthy();
    expect(isFunction(classInstance)).toBeTruthy();
  });

  it("should return `false` for non-functions", () => {
    expect(isFunction(string)).toBeFalsy();
    expect(isFunction(number)).toBeFalsy();
    expect(isFunction(true)).toBeFalsy();
    expect(isFunction(null)).toBeFalsy();
    expect(isFunction(void 0)).toBeFalsy();
    expect(isFunction(symbol)).toBeFalsy();
    expect(isFunction(bigInt)).toBeFalsy();
    expect(isFunction(object)).toBeFalsy();
    expect(isFunction(array)).toBeFalsy();
    expect(isFunction(regExp)).toBeFalsy();
  });
});
