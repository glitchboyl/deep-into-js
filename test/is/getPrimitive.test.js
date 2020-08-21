import getPrimitive from "is/getPrimitive";
import {
  string,
  number,
  symbol,
  bigInt,
  object,
  array,
  fn,
} from "test/utils";

describe("getPrimitive", () => {
  it(`getPrimitive('${string}') should return \`[object String]\``, () => {
    expect(getPrimitive(string)).toBe("[object String]");
  });

  it(`getPrimitive(${number}) should return \`[object Number]\``, () => {
    expect(getPrimitive(number)).toBe("[object Number]");
  });

  it("getPrimitive(false) should return `[object Boolean]`", () => {
    expect(getPrimitive(false)).toBe("[object Boolean]");
  });

  it("getPrimitive(null) should return `[object Null]`", () => {
    expect(getPrimitive(null)).toBe("[object Null]");
  });

  it("getPrimitive(void 0) should return `[object Undefined]`", () => {
    expect(getPrimitive(void 0)).toBe("[object Undefined]");
  });

  it(`getPrimitive(${symbol.toString()}) should return \`[object Symbol]\``, () => {
    expect(getPrimitive(symbol)).toBe("[object Symbol]");
  });

  it(`getPrimitive(${bigInt}n) should return \`[object BigInt]\``, () => {
    expect(getPrimitive(bigInt)).toBe("[object BigInt]");
  });

  it(`getPrimitive(${JSON.stringify(
    object
  )}) should return \`[object Object]\``, () => {
    expect(getPrimitive(object)).toBe("[object Object]");
  });

  it(`getPrimitive(${JSON.stringify(
    array
  )}) should return \`[object Array]\``, () => {
    expect(getPrimitive(array)).toBe("[object Array]");
  });

  it(`getPrimitive(${fn.toString()}) should return \`[object Function]\``, () => {
    expect(getPrimitive(fn)).toBe("[object Function]");
  });
});
