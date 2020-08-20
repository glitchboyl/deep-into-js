import getPrimitive from "./getPrimitive";

/**
 * Checks if `value` is classified as a `String` primitive or object.
 * 
 * @param value The value to check.
 * @returns Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * isString('boy next door')
 * // => true
 *
 * isString(1)
 * // => false
 */
const isString = (value) => {
  return typeof value === "string" || getPrimitive(value) === "[object String]";
};

export default isString;
