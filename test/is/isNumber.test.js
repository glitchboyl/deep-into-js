import assert from "assert";
import isNumber from "is/isNumber";
import {
  string,
  number,
  symbol,
  bigint,
  object,
  array,
  func,
} from "test/utils";

describe("isNumber", function () {
  it("should return `true` for numbers", function () {
    assert.strictEqual(isNumber(number), true);
    assert.strictEqual(isNumber(Object(number)), true);
    assert.strictEqual(isNumber(NaN), true);
  });

  it("should return `false` for non-numbers", function () {
    assert.strictEqual(isNumber(string), false);
    assert.strictEqual(isNumber(true), false);
    assert.strictEqual(isNumber(null), false);
    assert.strictEqual(isNumber(void 0), false);
    assert.strictEqual(isNumber(symbol), false);
    assert.strictEqual(isNumber(bigint), false);
    assert.strictEqual(isNumber(object), false);
    assert.strictEqual(isNumber(array), false);
    assert.strictEqual(isNumber(func), false);
  });
});
