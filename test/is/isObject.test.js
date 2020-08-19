import isObject from "is/isObject";
import {
  string,
  number,
  symbol,
  bigInt,
  object,
  array,
  func,
} from "test/utils";

describe('isObject', () => {
  it("should return `true` for objects", () => {
    expect(isObject(object)).toBeTruthy();
    expect(isObject(array)).toBeTruthy();
    expect(isObject(func)).toBeTruthy();
    expect(isObject(Object(string))).toBeTruthy();
    expect(isObject(Object(number))).toBeTruthy();
    expect(isObject(Object(false))).toBeTruthy();
    expect(isObject(Object(symbol))).toBeTruthy();
    expect(isObject(Object(bigInt))).toBeTruthy();
    expect(isObject(new Date())).toBeTruthy();
    expect(isObject(new Error())).toBeTruthy();
  });
  
  it("should return `false` for non-objects", () => {
    expect(isObject(string)).toBeFalsy();
    expect(isObject(number)).toBeFalsy();
    expect(isObject(true)).toBeFalsy();
    expect(isObject(null)).toBeFalsy();
    expect(isObject(void 0)).toBeFalsy();
    expect(isObject(symbol)).toBeFalsy();
    expect(isObject(bigInt)).toBeFalsy();
  });
});