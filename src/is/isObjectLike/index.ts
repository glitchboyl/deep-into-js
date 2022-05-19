import isNull from "@/is/isNull";

/**
 * Checks if `data` is object-like. A object-like data is not `null` and has `typeof` result of `object`.
 *
 * @param data The data to check.
 * @returns Returns `true` if `data` is object-like, else `false`.
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
export default function isObjectLike(data: any) {
  return !isNull(data) && typeof data === "object";
}
