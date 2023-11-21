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
    expect(isFunction(fn)).toMatchInlineSnapshot('true');
    expect(isFunction(asyncFn)).toMatchInlineSnapshot('true');
    expect(isFunction(generator)).toMatchInlineSnapshot('true');
    expect(isFunction(fnInstance)).toMatchInlineSnapshot('true');
    expect(isFunction(classInstance)).toMatchInlineSnapshot('true');
  });

  it("should return `false` for non-functions", () => {
    expect(isFunction(string)).toMatchInlineSnapshot('false');
    expect(isFunction(number)).toMatchInlineSnapshot('false');
    expect(isFunction(true)).toMatchInlineSnapshot('false');
    expect(isFunction(null)).toMatchInlineSnapshot('false');
    expect(isFunction(void 0)).toMatchInlineSnapshot('false');
    expect(isFunction(symbol)).toMatchInlineSnapshot('false');
    expect(isFunction(bigInt)).toMatchInlineSnapshot('false');
    expect(isFunction(object)).toMatchInlineSnapshot('false');
    expect(isFunction(array)).toMatchInlineSnapshot('false');
    expect(isFunction(regExp)).toMatchInlineSnapshot('false');
  });
});
