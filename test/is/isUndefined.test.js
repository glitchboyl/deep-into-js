import assert from "assert";
import isUndefined from "is/isUndefined";
import {
  string,
  number,
  symbol,
  bigint,
  object,
  array,
  func,
} from "test/utils";

describe("isUndefined", function () {
  it("should return `true` for `undefined` values", function () {
    assert.strictEqual(isUndefined(), true);
    assert.strictEqual(isUndefined(void 0), true);
  });

  it("should return `false` for non `undefined` values", function () {
    assert.strictEqual(isUndefined(string), false);
    assert.strictEqual(isUndefined(number), false);
    assert.strictEqual(isUndefined(false), false);
    assert.strictEqual(isUndefined(null), false);
    assert.strictEqual(isUndefined(symbol), false);
    assert.strictEqual(isUndefined(bigint), false);
    assert.strictEqual(isUndefined(object), false);
    assert.strictEqual(isUndefined(array), false);
    assert.strictEqual(isUndefined(func), false);
  });
});
