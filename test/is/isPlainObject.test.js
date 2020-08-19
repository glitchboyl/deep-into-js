import isPlainObject from "is/isPlainObject";
import {
  string,
  number,
  symbol,
  bigInt,
  object,
  array,
  func,
} from "test/utils";

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

  it("should return `false` for non-Object objects", () => {
    expect(isPlainObject(arguments)).toBeFalsy();
    expect(isPlainObject(Error)).toBeFalsy();
    expect(isPlainObject(Math)).toBeFalsy();
  });

  it("should return `false` for non plain objects", () => {
    function Foo() {
      this.name = "Tom";
    }

    expect(isPlainObject(string)).toBeFalsy();
    expect(isPlainObject(number)).toBeFalsy();
    expect(isPlainObject(true)).toBeFalsy();
    expect(isPlainObject(null)).toBeFalsy();
    expect(isPlainObject(void 0)).toBeFalsy();
    expect(isPlainObject(symbol)).toBeFalsy();
    expect(isPlainObject(bigInt)).toBeFalsy();
    expect(isPlainObject(array)).toBeFalsy();
    expect(isPlainObject(func)).toBeFalsy();
    expect(isPlainObject(new Foo("Jerry"))).toBeFalsy();
  });
});
