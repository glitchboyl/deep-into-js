import assert from "assert";
import isObject from "is/isObject";
import {
  string,
  number,
  symbol,
  bigint,
  object,
  array,
  func,
} from "test/utils";

describe("isObject", function () {
  it("should return `true` for objects", function () {
    assert.strictEqual(isObject(object), true);
    assert.strictEqual(isObject(array), true);
    assert.strictEqual(isObject(func), true);
    assert.strictEqual(isObject(Object(string)), true);
    assert.strictEqual(isObject(Object(number)), true);
    assert.strictEqual(isObject(Object(false)), true);
    assert.strictEqual(isObject(Object(symbol)), true);
    assert.strictEqual(isObject(Object(bigint)), true);
    assert.strictEqual(isObject(new Date()), true);
    assert.strictEqual(isObject(new Error()), true);
  });

  it("should return `false` for non-objects", function () {
    assert.strictEqual(isObject(string), false);
    assert.strictEqual(isObject(number), false);
    assert.strictEqual(isObject(true), false);
    assert.strictEqual(isObject(null), false);
    assert.strictEqual(isObject(void 0), false);
    assert.strictEqual(isObject(symbol), false);
    assert.strictEqual(isObject(bigint), false);
  });
});
