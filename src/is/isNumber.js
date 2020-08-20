import getPrimitive from "./getPrimitive";

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 * 
 * @param value The value to check.
 * @returns Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * isNumber(1)
 * // => true
 *
 * isNumber('1')
 * // => false
 */
const isNumber = (value) => {
  return typeof value === "number" || getPrimitive(value) === "[object Number]";
};

export default isNumber;
