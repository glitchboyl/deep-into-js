import isNull from "./";
import {
  string,
  number,
  symbol,
  bigInt,
  object,
  array,
  fn,
} from "@/test-utils";

describe("isNull", () => {
  it("should return `true` for `null` value", () => {
    expect(isNull(null)).toMatchInlineSnapshot('true');
  });

  it("should return `false` for non `null` values", () => {
    expect(isNull(string)).toMatchInlineSnapshot('false');
    expect(isNull(number)).toMatchInlineSnapshot('false');
    expect(isNull(false)).toMatchInlineSnapshot('false');
    expect(isNull(void 0)).toMatchInlineSnapshot('false');
    expect(isNull(symbol)).toMatchInlineSnapshot('false');
    expect(isNull(bigInt)).toMatchInlineSnapshot('false');
    expect(isNull(object)).toMatchInlineSnapshot('false');
    expect(isNull(array)).toMatchInlineSnapshot('false');
    expect(isNull(fn)).toMatchInlineSnapshot('false');
  });
});
