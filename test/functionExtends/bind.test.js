import { apply, bind } from "functionExtends";
import isUndefined from "is/isUndefined";

describe("bind", () => {
  function fn() {
    var result = [this];
    apply(Array.prototype.push)(result, arguments);
    return result;
  }

  it("should bind a function to an object", () => {
    const object = {},
      bound = bind(fn)(object);

    expect(bound("a")).toStrictEqual([object, "a"]);
  });

  it("should partially apply arguments ", () => {
    const object = {};
    let bound = bind(fn)(object, "a");

    expect(bound()).toStrictEqual([object, "a"]);

    bound = bind(fn)(object, "a");
    expect(bound("b")).toStrictEqual([object, "a", "b"]);

    bound = bind(fn)(object, "a", "b");
    expect(bound()).toStrictEqual([object, "a", "b"]);
    expect(bound("c", "d")).toStrictEqual([object, "a", "b", "c", "d"]);
  });

  it("should create a function with a `length` of `0`", () => {
    const fn = function (a, b, c) {};
    let bound = bind(fn)({});

    expect(bound.length).toBe(0);

    bound = bind(fn)({}, 1);
    expect(bound.length).toBe(0);
  });

  it("should ignore binding when called with the `new` operator", () => {
    function Foo() {
      return this;
    }

    const bound = bind(Foo)({ a: 1 }),
      newBound = new bound();

    expect(bound().a).toBe(1);
    expect(isUndefined(newBound.a)).toBeTruthy();
    expect(newBound instanceof Foo).toBeTruthy();
  });

  it("should ensure `new bound` is an instance of `func`", () => {
    function Foo(value) {
      return value && object;
    }

    const bound = bind(Foo)(),
      object = {};

    expect(new bound() instanceof Foo).toBeTruthy();
    expect(new bound(true)).toBe(object);
  });

  it("should append array arguments to partially applied arguments", () => {
    const object = {},
      bound = bind(fn)(object, "a");

    expect(bound(["b"], "c")).toStrictEqual([object, "a", ["b"], "c"]);
  });

  it("should not rebind functions", () => {
    const object1 = {},
      object2 = {},
      object3 = {};

    const bound1 = bind(fn)(object1),
      bound2 = bind(bound1)(object2, "a"),
      bound3 = bind(bound1)(object3, "b");

    expect(bound1()).toStrictEqual([object1]);
    expect(bound2()).toStrictEqual([object1, "a"]);
    expect(bound3()).toStrictEqual([object1, "b"]);
  });
});
