import getPrimitive from "./getPrimitive";
import isObject from "./isObject";

/**
 * Checks if `value` is likely an `Function` object.
 *
 * @param value The value to check.
 * @returns Returns `true` if `value` is an `Function` object, else `false`.
 * @example
 *
 * isFunction(class Any{})
 * // => true
 *
 * isFunction(() => {})
 * // => true
 *
 * isFunction(async () => {})
 * // => true
 *
 * isFunction(function * Any() {})
 * // => true
 *
 * isFunction(Math.round)
 * // => true
 *
 * isFunction(/abc/)
 * // => false
 */
const isFunction = (value) => {
  return (
    isObject(value) &&
    (getPrimitive(value) === "[object Function]" ||
      getPrimitive(value) === "[object AsyncFunction]" ||
      getPrimitive(value) === "[object GeneratorFunction]")
  );
};

export default isFunction;
