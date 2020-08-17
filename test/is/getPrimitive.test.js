import assert from "assert";
import getPrimitive from "is/getPrimitive";
import {
  string,
  number,
  symbol,
  bigint,
  object,
  array,
  func,
} from "test/utils";

describe("getPrimitive", function () {
  it(`getPrimitive('${string}') should return \`[object String]\``, function () {
    assert.strictEqual(getPrimitive(string), "[object String]");
  });

  it(`getPrimitive(${number}) should return \`[object Number]\``, function () {
    assert.strictEqual(getPrimitive(number), "[object Number]");
  });

  it("getPrimitive(false) should return `[object Boolean]`", function () {
    assert.strictEqual(getPrimitive(false), "[object Boolean]");
  });

  it("getPrimitive(null) should return `[object Null]`", function () {
    assert.strictEqual(getPrimitive(null), "[object Null]");
  });

  it("getPrimitive(void 0) should return `[object Undefined]`", function () {
    assert.strictEqual(getPrimitive(void 0), "[object Undefined]");
  });

  it(`getPrimitive(${symbol.toString()}) should return \`[object Symbol]\``, function () {
    assert.strictEqual(getPrimitive(symbol), "[object Symbol]");
  });

  it(`getPrimitive(${bigint}n) should return \`[object BigInt]\``, function () {
    assert.strictEqual(getPrimitive(bigint), "[object BigInt]");
  });

  it(`getPrimitive(${JSON.stringify(
    object
  )}) should return \`[object Object]\``, function () {
    assert.strictEqual(getPrimitive(object), "[object Object]");
  });

  it(`getPrimitive(${JSON.stringify(
    array
  )}) should return \`[object Array]\``, function () {
    assert.strictEqual(getPrimitive(array), "[object Array]");
  });

  it(`getPrimitive(${func.toString()}) should return \`[object Function]\``, function () {
    assert.strictEqual(getPrimitive(func), "[object Function]");
  });
});
