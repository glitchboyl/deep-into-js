import assert from "assert";
import isPlainObject from "is/isPlainObject";
import {
  string,
  number,
  symbol,
  bigint,
  object,
  array,
  func,
} from "test/utils";

describe("isPlainObject", function () {
  it("should detect plain objects", function () {
    assert.strictEqual(isPlainObject(object), true);
  });

  it("should return `true` for objects with a `[[Prototype]]` of `null`", function () {
    const _object = Object.create(null);
    assert.strictEqual(isPlainObject(_object), true);

    _object.constructor = Object.prototype.constructor;
    assert.strictEqual(isPlainObject(_object), true);
  });

  it("should return `false` for non-Object objects", function () {
    assert.strictEqual(isPlainObject(arguments), false);
    assert.strictEqual(isPlainObject(Error), false);
    assert.strictEqual(isPlainObject(Math), false);
  });

  it("should return `false` for non plain objects", function () {
    function Foo() {
      this.name = 'Tom';
    }

    assert.strictEqual(isPlainObject(string), false);
    assert.strictEqual(isPlainObject(number), false);
    assert.strictEqual(isPlainObject(true), false);
    assert.strictEqual(isPlainObject(null), false);
    assert.strictEqual(isPlainObject(void 0), false);
    assert.strictEqual(isPlainObject(symbol), false);
    assert.strictEqual(isPlainObject(bigint), false);
    assert.strictEqual(isPlainObject(array), false);
    assert.strictEqual(isPlainObject(new Foo("Jerry")), false);
    assert.strictEqual(isPlainObject(func), false);
  });
});
