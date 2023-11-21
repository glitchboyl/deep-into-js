import isObject from "./";
import {
  string,
  number,
  symbol,
  bigInt,
  object,
  array,
  fn,
} from "@/test-utils";

describe("isObject", () => {
  it("should return `true` for objects", () => {
    expect(isObject(object)).toMatchInlineSnapshot('true');
    expect(isObject(array)).toMatchInlineSnapshot('true');
    expect(isObject(fn)).toMatchInlineSnapshot('true');
    expect(isObject(Object(string))).toMatchInlineSnapshot('true');
    expect(isObject(Object(number))).toMatchInlineSnapshot('true');
    expect(isObject(Object(false))).toMatchInlineSnapshot('true');
    expect(isObject(Object(symbol))).toMatchInlineSnapshot('true');
    expect(isObject(Object(bigInt))).toMatchInlineSnapshot('true');
    expect(isObject(new Date())).toMatchInlineSnapshot('true');
    expect(isObject(new Error())).toMatchInlineSnapshot('true');
  });

  it("should return `false` for non-objects", () => {
    expect(isObject(string)).toMatchInlineSnapshot('false');
    expect(isObject(number)).toMatchInlineSnapshot('false');
    expect(isObject(true)).toMatchInlineSnapshot('false');
    expect(isObject(null)).toMatchInlineSnapshot('false');
    expect(isObject(void 0)).toMatchInlineSnapshot('false');
    expect(isObject(symbol)).toMatchInlineSnapshot('false');
    expect(isObject(bigInt)).toMatchInlineSnapshot('false');
  });
});
