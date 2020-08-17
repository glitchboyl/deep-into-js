import assert from "assert";
import isArguments from "is/isArguments";
import {
  string,
  number,
  symbol,
  bigint,
  object,
  array,
  func,
} from "test/utils";

describe("isArguments", function () {
  it("should return `true` for arguments", function () {
    assert.strictEqual(isArguments(arguments), true);
    assert.strictEqual(isArguments(Object(arguments)), true);
  });

  it("should return `false` for non-arguments", function () {
    assert.strictEqual(isArguments(string), false);
    assert.strictEqual(isArguments(number), false);
    assert.strictEqual(isArguments(true), false);
    assert.strictEqual(isArguments(null), false);
    assert.strictEqual(isArguments(void 0), false);
    assert.strictEqual(isArguments(symbol), false);
    assert.strictEqual(isArguments(bigint), false);
    assert.strictEqual(isArguments(object), false);
    assert.strictEqual(isArguments(array), false);
    assert.strictEqual(isArguments(func), false);
  });
});
