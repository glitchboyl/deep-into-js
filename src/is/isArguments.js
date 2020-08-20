import getPrimitive from "./getPrimitive";
import isObjectLike from "./isObjectLike";

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @param value The value to check.
 * @returns Returns `true` if `value` is an `arguments` object, else `false`.
 * @example
 *
 * isArguments(function() { return arguments }())
 * // => true
 *
 * isArguments([1, 2, 3])
 * // => false
 */
const isArguments = (value) => {
  return isObjectLike(value) && getPrimitive(value) === "[object Arguments]";
};

export default isArguments;
