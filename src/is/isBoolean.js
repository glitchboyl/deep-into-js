import getPrimitive from "./getPrimitive";

/**
 * Checks if `value` is classified as a `Boolean` primitive or object.
 * 
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
 * @example
 *
 * isBoolean(false)
 * // => true
 *
 * isBoolean(null)
 * // => false
 */
const isBoolean = (value) => {
  return typeof value === "boolean" || getPrimitive(value) === "[object Boolean]";
};

export default isBoolean;
