import apply from "functionExtends/apply";
import { string, funcInstance } from "test/utils";

describe("apply", () => {
  it("the value of `this` should be bound to object `obj` when apply `greet`", () => {
    function greet() {
      const reply = ["Hello,", this.name + "."].join(" ");
      return reply;
    }

    const obj = {
      name: string,
    };

    expect(apply(greet)(obj)).toBe(`Hello, ${string}.`);
  });

  it("when using `apply` to chain constructors for an object, invoke `funcInstance` and passing `this` and `string`, `Tom.text` should be equal to `string`", () => {
    function Person(name, text) {
      this.name = name;
      apply(funcInstance)(this, [text]);
    }

    const Tom = new Person("Tom", string);

    expect(Tom.text).toBe(string);
  });

  it("when using `apply` to chain constructors for an object, invoke `self` and `void 0` is passed as `this`, and result should correspond to `window` and `string` object", () => {
    function self() {
      return this;
    }
    const applyString = apply(self)(string);

    expect(apply(self)(void 0)).toBe(window);

    expect(typeof applyString).toBe("object");
    expect(applyString == string).toBeTruthy();
  });
});
