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
    expect(isArray(array)).toMatchInlineSnapshot('true');
    expect(isArray(Object(array))).toMatchInlineSnapshot('true');
  });

  it("should return `false` for non-arrays", () => {
    expect(isArray(string)).toMatchInlineSnapshot('false');
    expect(isArray(number)).toMatchInlineSnapshot('false');
    expect(isArray(true)).toMatchInlineSnapshot('false');
    expect(isArray(null)).toMatchInlineSnapshot('false');
    expect(isArray(void 0)).toMatchInlineSnapshot('false');
    expect(isArray(symbol)).toMatchInlineSnapshot('false');
    expect(isArray(bigInt)).toMatchInlineSnapshot('false');
    expect(isArray(object)).toMatchInlineSnapshot('false');
    expect(isArray(fn)).toMatchInlineSnapshot('false');
  });
});
