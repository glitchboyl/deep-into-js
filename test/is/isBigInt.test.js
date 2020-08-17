import assert from "assert";
import isBigInt from "is/isBigInt";
import {
  string,
  number,
  symbol,
  bigint,
  object,
  array,
  func,
} from "test/utils";

describe("isSymbol", function () {
  it("should return `true` for bigints", function () {
    assert.strictEqual(isBigInt(bigint), true);
    assert.strictEqual(isBigInt(Object(bigint)), true);
  });

  it("should return `false` for non-bigints", function () {
    assert.strictEqual(isBigInt(string), false);
    assert.strictEqual(isBigInt(number), false);
    assert.strictEqual(isBigInt(false), false);
    assert.strictEqual(isBigInt(null), false);
    assert.strictEqual(isBigInt(void 0), false);
    assert.strictEqual(isBigInt(symbol), false);
    assert.strictEqual(isBigInt(object), false);
    assert.strictEqual(isBigInt(array), false);
    assert.strictEqual(isBigInt(func), false);
  });
});
