import assert from "assert";
import isNull from "is/isNull";
import {
  string,
  number,
  symbol,
  bigint,
  object,
  array,
  func,
} from "test/utils";

describe("isNull", function () {
  it("should return `true` for `null` values", function () {
    assert.strictEqual(isNull(null), true);
  });

  it("should return `false` for non `null` values", function () {
    assert.strictEqual(isNull(string), false);
    assert.strictEqual(isNull(number), false);
    assert.strictEqual(isNull(false), false);
    assert.strictEqual(isNull(void 0), false);
    assert.strictEqual(isNull(symbol), false);
    assert.strictEqual(isNull(bigint), false);
    assert.strictEqual(isNull(object), false);
    assert.strictEqual(isNull(array), false);
    assert.strictEqual(isNull(func), false);
  });
});
