import isNull from "./isNull";

/**
 * Checks if `value` is object-like. A object-like value is not `null` and has `typeof` result of `object`.
 * 
 * @param value The value to check.
 * @returns Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * isObjectLike({})
 * // => true
 *
 * isObjectLike([1, 2, 3])
 * // => true
 *
 * isObjectLike(Function)
 * // => false
 *
 * isObjectLike(null)
 * // => false
 */
const isObjectLike = (value) => {
  const type = typeof value;
  return !isNull(value) && type === "object";
};

export default isObjectLike;
