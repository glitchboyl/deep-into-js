import isPlainObject from "./";
import {
  string,
  number,
  symbol,
  bigInt,
  object,
  array,
  fn,
  classInstance,
} from "@/test-utils";

describe("isPlainObject", () => {
  it("should detect plain objects", () => {
    expect(isPlainObject(object)).toMatchInlineSnapshot('true');
  });

  it("should return `true` for objects with a `[[Prototype]]` of `null`", () => {
    const _object = Object.create(null);
    expect(isPlainObject(_object)).toMatchInlineSnapshot('true');

    _object.constructor = Object.prototype.constructor;
    expect(isPlainObject(_object)).toMatchInlineSnapshot('true');
  });

  it("should return `false` for non-Object objects", function () {
    expect(isPlainObject(arguments)).toMatchInlineSnapshot("false");
    expect(isPlainObject(Error)).toMatchInlineSnapshot("false");
    expect(isPlainObject(Math)).toMatchInlineSnapshot("false");
  });

  it("should return `false` for non plain objects", () => {
    expect(isPlainObject(string)).toMatchInlineSnapshot("false");
    expect(isPlainObject(number)).toMatchInlineSnapshot("false");
    expect(isPlainObject(true)).toMatchInlineSnapshot("false");
    expect(isPlainObject(null)).toMatchInlineSnapshot("false");
    expect(isPlainObject(void 0)).toMatchInlineSnapshot("false");
    expect(isPlainObject(symbol)).toMatchInlineSnapshot("false");
    expect(isPlainObject(bigInt)).toMatchInlineSnapshot("false");
    expect(isPlainObject(array)).toMatchInlineSnapshot("false");
    expect(isPlainObject(fn)).toMatchInlineSnapshot("false");
    expect(isPlainObject(new classInstance("Jerry"))).toMatchInlineSnapshot(
      "false"
    );
  });
});
