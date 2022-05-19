import apply from "./";
import { string, fnInstance } from "@/test-utils";

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

  it("when using `apply` to chain constructors for an object, invoke `fnInstance` and passing `this` and `string`, `Tom.text` should be equal to `string`", () => {
    function Person(name: string, text: string) {
      this.name = name;
      apply(fnInstance)(this, [text]);
    }

    const Tom = new (Person as any)("Tom", string);

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
