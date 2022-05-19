import { getPrimitive, isObjectLike, isNull } from "@/is";

/**
 * Strict object type check. Only returns true for plain JavaScript objects.
 *
 * @param data The data to check.
 * @returns Returns `true` if `data` is plain object, else `false`.
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
export default function isPlainObject(data: any) {
  if (!isObjectLike(data) || getPrimitive(data) !== "[object Object]") {
    return false;
  }

  if (isNull(Reflect.getPrototypeOf(data))) {
    return true;
  }

  return Reflect.getPrototypeOf(data) === Object.prototype;
}
