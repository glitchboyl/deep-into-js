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

test(`getPrimitive('${string}') should return \`[object String]\``, () => {
  expect(getPrimitive(string)).toBe("[object String]");
});

test(`getPrimitive(${number}) should return \`[object Number]\``, () => {
  expect(getPrimitive(number)).toBe("[object Number]");
});

test("getPrimitive(false) should return `[object Boolean]`", () => {
  expect(getPrimitive(false)).toBe("[object Boolean]");
});

test("getPrimitive(null) should return `[object Null]`", () => {
  expect(getPrimitive(null)).toBe("[object Null]");
});

test("getPrimitive(void 0) should return `[object Undefined]`", () => {
  expect(getPrimitive(void 0)).toBe("[object Undefined]");
});

test(`getPrimitive(${symbol.toString()}) should return \`[object Symbol]\``, () => {
  expect(getPrimitive(symbol)).toBe("[object Symbol]");
});

test(`getPrimitive(${bigint}n) should return \`[object BigInt]\``, () => {
  expect(getPrimitive(bigint)).toBe("[object BigInt]");
});

test(`getPrimitive(${JSON.stringify(
  object
)}) should return \`[object Object]\``, () => {
  expect(getPrimitive(object)).toBe("[object Object]");
});

test(`getPrimitive(${JSON.stringify(
  array
)}) should return \`[object Array]\``, () => {
  expect(getPrimitive(array)).toBe("[object Array]");
});

test(`getPrimitive(${func.toString()}) should return \`[object Function]\``, () => {
  expect(getPrimitive(func)).toBe("[object Function]");
});
