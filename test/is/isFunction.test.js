import isFunction from "is/isFunction";
import {
  string,
  number,
  symbol,
  bigInt,
  object,
  array,
  func,
  asyncFunc,
  generator,
  funcInstance,
  classInstance,
  regExp,
} from "test/utils";

describe("isFunction", () => {
  it("should return `true` for functions", () => {
    expect(isFunction(func)).toBeTruthy();
    expect(isFunction(asyncFunc)).toBeTruthy();
    expect(isFunction(generator)).toBeTruthy();
    expect(isFunction(funcInstance)).toBeTruthy();
    expect(isFunction(classInstance)).toBeTruthy();
    expect(isFunction(Math.round)).toBeTruthy();
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
