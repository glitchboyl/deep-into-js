import assert from "assert";
import isObjectLike from "is/isObjectLike";
import {
  string,
  number,
  symbol,
  bigint,
  object,
  array,
  func,
} from "test/utils";

describe("isObjectLike", function () {
  it("should return `true` for objects", function () {
    assert.strictEqual(isObjectLike(object), true);
    assert.strictEqual(isObjectLike(array), true);
    assert.strictEqual(isObjectLike(Object(string)), true);
    assert.strictEqual(isObjectLike(Object(number)), true);
    assert.strictEqual(isObjectLike(Object(false)), true);
    assert.strictEqual(isObjectLike(Object(symbol)), true);
    assert.strictEqual(isObjectLike(Object(bigint)), true);
    assert.strictEqual(isObjectLike(new Date), true);
    assert.strictEqual(isObjectLike(new Error), true);
  });

  it("should return `false` for non-objects", function () {
    assert.strictEqual(isObjectLike(string), false);
    assert.strictEqual(isObjectLike(number), false);
    assert.strictEqual(isObjectLike(true), false);
    assert.strictEqual(isObjectLike(null), false);
    assert.strictEqual(isObjectLike(void 0), false);
    assert.strictEqual(isObjectLike(symbol), false);
    assert.strictEqual(isObjectLike(bigint), false);
    assert.strictEqual(isObjectLike(func), false);
  });
});
