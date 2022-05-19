import call from "./";
import { string, fnInstance } from "@/test-utils";

describe("call", () => {
  it("the value of `this` should be bound to object `obj` when call `greet`", () => {
    function greet() {
      const reply = ["Hello,", this.name + "."].join(" ");
      return reply;
    }

    const obj = {
      name: string,
    };

    expect(call(greet)(obj)).toBe(`Hello, ${string}.`);
  });

  it("when using `call` to chain constructors for an object, invoke `fnInstance` and passing `this` and `string`, `Tom.text` should be equal to `string`", () => {
    function Person(name: string, text: string) {
      this.name = name;
      call(fnInstance)(this, text);
    }

    const Tom = new (Person as any)("Tom", string);

    expect(Tom.text).toBe(string);
  });

  it("when using `call` to chain constructors for an object, , and result should correspond to `window` and `string` object", () => {
    function self() {
      return this;
    }
    const callString = call(self)(string);

    expect(call(self)(void 0)).toBe(window);

    expect(typeof callString).toBe("object");
    expect(callString == string).toBeTruthy();
  });
});
