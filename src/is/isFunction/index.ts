/**
 * Checks if `data` is likely an `Function` object.
 *
 * @param data The data to check.
 * @returns Returns `true` if `data` is an `Function` object, else `false`.
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
export default function isFunction(data: any) {
  return typeof data === "function";
}
