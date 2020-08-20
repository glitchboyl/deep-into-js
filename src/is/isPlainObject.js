import getPrimitive from "./getPrimitive";
import isObjectLike from "./isObjectLike";
import isNull from "./isNull";

/**
 * Strict object type check. Only returns true for plain JavaScript objects.
 *
 * @param value The value to check.
 * @returns Returns `true` if `value` is plain object, else `false`.
 * @example
 *
 * isPlainObject([1, 2, 3])
 * // => false
 *
 * isPlainObject({ 'x': 0, 'y': 0 })
 * // => true
 *
 * isPlainObject(Object.create(null))
 * // => true
 */
const isPlainObject = (value) => {
  if (!isObjectLike(value) || getPrimitive(value) !== "[object Object]") {
    return false;
  }

  if (isNull(Reflect.getPrototypeOf(value))) {
    return true;
  }

  return Reflect.getPrototypeOf(value) === Object.prototype;
};

export default isPlainObject;
