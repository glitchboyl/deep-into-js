import assert from "assert";
import isSymbol from "is/isSymbol";
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
  it("should return `true` for symbols", function () {
    assert.strictEqual(isSymbol(symbol), true);
    assert.strictEqual(isSymbol(Object(symbol)), true);
  });

  it("should return `false` for non-symbols", function () {
    assert.strictEqual(isSymbol(string), false);
    assert.strictEqual(isSymbol(number), false);
    assert.strictEqual(isSymbol(false), false);
    assert.strictEqual(isSymbol(null), false);
    assert.strictEqual(isSymbol(void 0), false);
    assert.strictEqual(isSymbol(bigint), false);
    assert.strictEqual(isSymbol(object), false);
    assert.strictEqual(isSymbol(array), false);
    assert.strictEqual(isSymbol(func), false);
  });
});
