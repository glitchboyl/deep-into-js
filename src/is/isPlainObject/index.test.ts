import isPlainObject from "./";
import {
  string,
  number,
  symbol,
  bigInt,
  object,
  array,
  fn,
	classInstance
} from "@/test-utils";

describe("isPlainObject", () => {
  it("should detect plain objects", () => {
    expect(isPlainObject(object)).toBeTruthy();
  });

  it("should return `true` for objects with a `[[Prototype]]` of `null`", () => {
    const _object = Object.create(null);
    expect(isPlainObject(_object)).toBeTruthy();

    _object.constructor = Object.prototype.constructor;
    expect(isPlainObject(_object)).toBeTruthy();
  });

  it("should return `false` for non-Object objects", function () {
    expect(isPlainObject(arguments)).toBeFalsy();
    expect(isPlainObject(Error)).toBeFalsy();
    expect(isPlainObject(Math)).toBeFalsy();
  });

  it("should return `false` for non plain objects", () => {
    expect(isPlainObject(string)).toBeFalsy();
    expect(isPlainObject(number)).toBeFalsy();
    expect(isPlainObject(true)).toBeFalsy();
    expect(isPlainObject(null)).toBeFalsy();
    expect(isPlainObject(void 0)).toBeFalsy();
    expect(isPlainObject(symbol)).toBeFalsy();
    expect(isPlainObject(bigInt)).toBeFalsy();
    expect(isPlainObject(array)).toBeFalsy();
    expect(isPlainObject(fn)).toBeFalsy();
    expect(isPlainObject(new classInstance("Jerry"))).toBeFalsy();
  });
});
