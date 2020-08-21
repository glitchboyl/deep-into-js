import extend from "functionExtends";
import isUndefined from "is/isUndefined";
import { string, fnInstance } from "test/utils";

describe("functionExtends.call", () => {
  it("the value of `this` should be bound to object `obj` when call `greet`", () => {
    function greet() {
      const reply = ["Hello,", this.name + "."].join(" ");
      return reply;
    }

    const obj = {
      name: string,
    };

    expect(extend(greet).call(obj)).toBe(`Hello, ${string}.`);
  });

  it("when using `call` to chain constructors for an object, invoke `fnInstance` and passing `this` and `string`, `Tom.text` should be equal to `string`", () => {
    function Person(name, text) {
      this.name = name;
      extend(fnInstance).call(this, text);
    }

    const Tom = new Person("Tom", string);

    expect(Tom.text).toBe(string);
  });

  it("when using `call` to chain constructors for an object, , and result should correspond to `window` and `string` object", () => {
    function self() {
      return this;
    }
    const callString = extend(self).call(string);

    expect(extend(self).call(void 0)).toBe(window);

    expect(typeof callString).toBe("object");
    expect(callString == string).toBeTruthy();
  });
});

describe("functionExtends.apply", () => {
  it("the value of `this` should be bound to object `obj` when apply `greet`", () => {
    function greet() {
      const reply = ["Hello,", this.name + "."].join(" ");
      return reply;
    }

    const obj = {
      name: string,
    };

    expect(extend(greet).apply(obj)).toBe(`Hello, ${string}.`);
  });

  it("when using `apply` to chain constructors for an object, invoke `fnInstance` and passing `this` and `string`, `Tom.text` should be equal to `string`", () => {
    function Person(name, text) {
      this.name = name;
      extend(fnInstance).apply(this, [text]);
    }

    const Tom = new Person("Tom", string);

    expect(Tom.text).toBe(string);
  });

  it("when using `apply` to chain constructors for an object, invoke `self` and `void 0` is passed as `this`, and result should correspond to `window` and `string` object", () => {
    function self() {
      return this;
    }
    const applyString = extend(self).apply(string);

    expect(extend(self).apply(void 0)).toBe(window);

    expect(typeof applyString).toBe("object");
    expect(applyString == string).toBeTruthy();
  });
});

describe("functionExtends.bind", () => {
  function fn() {
    var result = [this];
    extend(Array.prototype.push).apply(result, arguments);
    return result;
  }

  it("should bind a function to an object", () => {
    const object = {},
      bound = extend(fn).bind(object);

    expect(bound("a")).toStrictEqual([object, "a"]);
  });

  it("should partially apply arguments ", () => {
    const object = {};
    let bound = extend(fn).bind(object, "a");

    expect(bound()).toStrictEqual([object, "a"]);

    bound = extend(fn).bind(object, "a");
    expect(bound("b")).toStrictEqual([object, "a", "b"]);

    bound = extend(fn).bind(object, "a", "b");
    expect(bound()).toStrictEqual([object, "a", "b"]);
    expect(bound("c", "d")).toStrictEqual([object, "a", "b", "c", "d"]);
  });

  it("should create a function with a `length` of `0`", () => {
    const fn = function (a, b, c) {};
    let bound = extend(fn).bind({});

    expect(bound.length).toBe(0);

    bound = extend(fn).bind({}, 1);
    expect(bound.length).toBe(0);
  });

  it("should ignore binding when called with the `new` operator", () => {
    function Foo() {
      return this;
    }

    const bound = extend(Foo).bind({ a: 1 }),
      newBound = new bound();

    expect(bound().a).toBe(1);
    expect(isUndefined(newBound.a)).toBeTruthy();
    expect(newBound instanceof Foo).toBeTruthy();
  });

  it("should ensure `new bound` is an instance of `func`", () => {
    function Foo(value) {
      return value && object;
    }

    const bound = extend(Foo).bind(),
      object = {};

    expect(new bound() instanceof Foo).toBeTruthy();
    expect(new bound(true)).toBe(object);
  });

  it("should append array arguments to partially applied arguments", () => {
    const object = {},
      bound = extend(fn).bind(object, "a");

    expect(bound(["b"], "c")).toStrictEqual([object, "a", ["b"], "c"]);
  });

  it("should not rebind functions", () => {
    const object1 = {},
      object2 = {},
      object3 = {};

    const bound1 = extend(fn).bind(object1),
      bound2 = extend(bound1).bind(object2, "a"),
      bound3 = extend(bound1).bind(object3, "b");

    expect(bound1()).toStrictEqual([object1]);
    expect(bound2()).toStrictEqual([object1, "a"]);
    expect(bound3()).toStrictEqual([object1, "b"]);
  });
});
