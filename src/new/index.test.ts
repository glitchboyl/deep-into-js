import _new from "./";
import { string, fnInstance } from "@/test-utils";
import type { Obj } from "@/types";

describe("new", () => {
  it("`new` a instance normally", () => {
    expect(_new(fnInstance, string).text).toBe(string);
  });

  it("when the constructor returns an object, the return value is used as the result", () => {
    const object: Obj = {};
    function test(text: any) {
      object.text = text;
      return object;
    }
    expect(_new(test, string)).toBe(object);
    expect(object.text).toBe(string);
  });

  it("throw TypeError when the constructor is not a function", () => {
    expect(() => _new(string as any)).toThrowError(TypeError);
  });
});
