import assert from "assert";
import isString from "is/isString";
import {
  string,
  number,
  symbol,
  bigint,
  object,
  array,
  func,
} from "test/utils";

describe("isString", function () {
  it("should return `true` for strings", function () {
    assert.strictEqual(isString(string), true);
    assert.strictEqual(isString(Object(string)), true);
  });

  it("should return `false` for non-strings", function () {
    assert.strictEqual(isString(number), false);
    assert.strictEqual(isString(true), false);
    assert.strictEqual(isString(null), false);
    assert.strictEqual(isString(void 0), false);
    assert.strictEqual(isString(symbol), false);
    assert.strictEqual(isString(bigint), false);
    assert.strictEqual(isString(object), false);
    assert.strictEqual(isString(array), false);
    assert.strictEqual(isString(func), false);
  });
});
