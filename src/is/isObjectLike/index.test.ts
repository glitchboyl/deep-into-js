import isObjectLike from "./";
import {
  string,
  number,
  symbol,
  bigInt,
  object,
  array,
  fn,
} from "@/test-utils";

describe("isObjectLike", () => {
  it("should return `true` for object-like", () => {
    expect(isObjectLike(object)).toMatchInlineSnapshot('true');
    expect(isObjectLike(array)).toMatchInlineSnapshot('true');
    expect(isObjectLike(Object(string))).toMatchInlineSnapshot('true');
    expect(isObjectLike(Object(number))).toMatchInlineSnapshot('true');
    expect(isObjectLike(Object(false))).toMatchInlineSnapshot('true');
    expect(isObjectLike(Object(symbol))).toMatchInlineSnapshot('true');
    expect(isObjectLike(Object(bigInt))).toMatchInlineSnapshot('true');
    expect(isObjectLike(new Date())).toMatchInlineSnapshot('true');
    expect(isObjectLike(new Error())).toMatchInlineSnapshot('true');
  });

  it("should return `false` for non-object-like", () => {
    expect(isObjectLike(string)).toMatchInlineSnapshot('false');
    expect(isObjectLike(number)).toMatchInlineSnapshot('false');
    expect(isObjectLike(true)).toMatchInlineSnapshot('false');
    expect(isObjectLike(null)).toMatchInlineSnapshot('false');
    expect(isObjectLike(void 0)).toMatchInlineSnapshot('false');
    expect(isObjectLike(symbol)).toMatchInlineSnapshot('false');
    expect(isObjectLike(bigInt)).toMatchInlineSnapshot('false');
    expect(isObjectLike(fn)).toMatchInlineSnapshot('false');
  });
});
