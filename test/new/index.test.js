import New from "new";
import { string, object, funcInstance } from "test/utils";

describe("new", () => {
  it("`new` a instance normally", () => {
    expect(New(funcInstance, string).text).toBe(string);
  });

  it("when the constructor returns an object, the return value is used as the result", () => {
    function test(text) {
      object.text = text;
      return object;
    }
    expect(New(test, string)).toBe(object);
    expect(object.text).toBe(string);
  });

  it("throw TypeError when the constructor is not a function", () => {
    expect(() => New(string)).toThrowError(TypeError);
  });
});
