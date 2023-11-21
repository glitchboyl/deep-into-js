import isBigInt from "./";
import {
  string,
  number,
  symbol,
  bigInt,
  object,
  array,
  fn,
} from "@/test-utils";

describe("isBigInt", () => {
  it("should return `true` for bigInts", () => {
    expect(isBigInt(bigInt)).toMatchInlineSnapshot('true');
    expect(isBigInt(Object(bigInt))).toMatchInlineSnapshot('true');
  });

  it("should return `false` for non-bigInts", () => {
    expect(isBigInt(string)).toMatchInlineSnapshot('false');
    expect(isBigInt(number)).toMatchInlineSnapshot('false');
    expect(isBigInt(true)).toMatchInlineSnapshot('false');
    expect(isBigInt(null)).toMatchInlineSnapshot('false');
    expect(isBigInt(void 0)).toMatchInlineSnapshot('false');
    expect(isBigInt(symbol)).toMatchInlineSnapshot('false');
    expect(isBigInt(object)).toMatchInlineSnapshot('false');
    expect(isBigInt(array)).toMatchInlineSnapshot('false');
    expect(isBigInt(fn)).toMatchInlineSnapshot('false');
  });
});
