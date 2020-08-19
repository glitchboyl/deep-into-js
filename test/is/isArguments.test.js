import isArguments from "is/isArguments";
import {
  string,
  number,
  symbol,
  bigInt,
  object,
  array,
  func,
} from "test/utils";

describe("isArguments", () => {
  it("should return `true` for arguments", () => {
    expect(isArguments(arguments)).toBeTruthy();
    expect(isArguments(Object(arguments))).toBeTruthy();
  });

  it("should return `false` for non-arguments", () => {
    expect(isArguments(string)).toBeFalsy();
    expect(isArguments(number)).toBeFalsy();
    expect(isArguments(true)).toBeFalsy();
    expect(isArguments(null)).toBeFalsy();
    expect(isArguments(void 0)).toBeFalsy();
    expect(isArguments(symbol)).toBeFalsy();
    expect(isArguments(bigInt)).toBeFalsy();
    expect(isArguments(object)).toBeFalsy();
    expect(isArguments(array)).toBeFalsy();
    expect(isArguments(func)).toBeFalsy();
  });
});
