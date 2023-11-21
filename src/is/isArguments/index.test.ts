import isArguments from "./";
import {
  string,
  number,
  symbol,
  bigInt,
  object,
  array,
  fn,
} from "@/test-utils";

describe("isArguments", () => {
  it("should return `true` for arguments", function () {
    expect(isArguments(arguments)).toMatchInlineSnapshot('true');
    expect(isArguments(Object(arguments))).toMatchInlineSnapshot('true');
  });

  it("should return `false` for non-arguments", () => {
    expect(isArguments(string)).toMatchInlineSnapshot('false');
    expect(isArguments(number)).toMatchInlineSnapshot('false');
    expect(isArguments(true)).toMatchInlineSnapshot('false');
    expect(isArguments(null)).toMatchInlineSnapshot('false');
    expect(isArguments(void 0)).toMatchInlineSnapshot('false');
    expect(isArguments(symbol)).toMatchInlineSnapshot('false');
    expect(isArguments(bigInt)).toMatchInlineSnapshot('false');
    expect(isArguments(object)).toMatchInlineSnapshot('false');
    expect(isArguments(array)).toMatchInlineSnapshot('false');
    expect(isArguments(fn)).toMatchInlineSnapshot('false');
  });
});
