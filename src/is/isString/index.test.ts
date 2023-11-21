import isString from "./";
import {
  string,
  number,
  symbol,
  bigInt,
  object,
  array,
  fn,
} from "@/test-utils";

describe("isString", () => {
  it("should return `true` for strings", () => {
    expect(isString(string)).toMatchInlineSnapshot('true');
    expect(isString(Object(string))).toMatchInlineSnapshot('true');
  });

  it("should return `false` for non-strings", () => {
    expect(isString(number)).toMatchInlineSnapshot('false');
    expect(isString(true)).toMatchInlineSnapshot('false');
    expect(isString(null)).toMatchInlineSnapshot('false');
    expect(isString(void 0)).toMatchInlineSnapshot('false');
    expect(isString(symbol)).toMatchInlineSnapshot('false');
    expect(isString(bigInt)).toMatchInlineSnapshot('false');
    expect(isString(object)).toMatchInlineSnapshot('false');
    expect(isString(array)).toMatchInlineSnapshot('false');
    expect(isString(fn)).toMatchInlineSnapshot('false');
  });
});
