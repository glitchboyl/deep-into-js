import getPrimitive from "./getPrimitive";

/**
 * Checks if `value` is classified as a `BigInt` primitive or object.
 *
 * @param value The value to check.
 * @returns Returns `true` if `value` is a bigInt, else `false`.
 * @example
 *
 * isBigInt(2333333333333333333333n)
 * // => true
 *
 * isBigInt(2333333333333333333333)
 * // => false
 */
const isBigInt = (value) => {
  return typeof value === "bigint" || getPrimitive(value) === "[object BigInt]";
};

export default isBigInt;
