import assert from "assert";
import isBoolean from "is/isBoolean";
import {
  string,
  number,
  symbol,
  bigint,
  object,
  array,
  func,
} from "test/utils";

describe("isBoolean", function () {
  it("should return `true` for booleans", function () {
    assert.strictEqual(isBoolean(true), true);
    assert.strictEqual(isBoolean(false), true);
    assert.strictEqual(isBoolean(Object(true)), true);
    assert.strictEqual(isBoolean(Object(false)), true);
  });

  it("should return `false` for non-booleans", function () {
    assert.strictEqual(isBoolean(string), false);
    assert.strictEqual(isBoolean(number), false);
    assert.strictEqual(isBoolean(null), false);
    assert.strictEqual(isBoolean(void 0), false);
    assert.strictEqual(isBoolean(symbol), false);
    assert.strictEqual(isBoolean(bigint), false);
    assert.strictEqual(isBoolean(object), false);
    assert.strictEqual(isBoolean(array), false);
    assert.strictEqual(isBoolean(func), false);
  });
});
