import getPrimitive from "./";
import {
  string,
  number,
  symbol,
  bigInt,
  object,
  array,
  fn,
} from "@/test-utils";

describe("getPrimitive", () => {
  it(`getPrimitive('${string}') should return \`[object String]\``, () => {
    expect(getPrimitive(string)).toMatchInlineSnapshot('"[object String]"');
  });

  it(`getPrimitive(${number}) should return \`[object Number]\``, () => {
    expect(getPrimitive(number)).toMatchInlineSnapshot('"[object Number]"');
  });

  it("getPrimitive(false) should return `[object Boolean]`", () => {
    expect(getPrimitive(false)).toMatchInlineSnapshot('"[object Boolean]"');
  });

  it("getPrimitive(null) should return `[object Null]`", () => {
    expect(getPrimitive(null)).toMatchInlineSnapshot('"[object Null]"');
  });

  it("getPrimitive(void 0) should return `[object Undefined]`", () => {
    expect(getPrimitive(void 0)).toMatchInlineSnapshot('"[object Undefined]"');
  });

  it(`getPrimitive(${symbol.toString()}) should return \`[object Symbol]\``, () => {
    expect(getPrimitive(symbol)).toMatchInlineSnapshot('"[object Symbol]"');
  });

  it(`getPrimitive(${bigInt}) should return \`[object BigInt]\``, () => {
    expect(getPrimitive(bigInt)).toMatchInlineSnapshot('"[object BigInt]"');
  });

  it(`getPrimitive(${JSON.stringify(
    object
  )}) should return \`[object Object]\``, () => {
    expect(getPrimitive(object)).toMatchInlineSnapshot('"[object Object]"');
  });

  it(`getPrimitive(${JSON.stringify(
    array
  )}) should return \`[object Array]\``, () => {
    expect(getPrimitive(array)).toMatchInlineSnapshot('"[object Array]"');
  });

  it(`getPrimitive(${fn.toString()}) should return \`[object Function]\``, () => {
    expect(getPrimitive(fn)).toMatchInlineSnapshot('"[object Function]"');
  });
});
