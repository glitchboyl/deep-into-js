import call from "functionExtends/call";
import { string, funcInstance } from "test/utils";

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

  it("when using `call` to chain constructors for an object, invoke `funcInstance` and passing `this` and `string`, `Tom.text` should be equal to `string`", () => {
    function Person(name, text) {
      this.name = name;
      call(funcInstance)(this, text);
    }

    const Tom = new Person("Tom", string);

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
