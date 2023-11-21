/**
 * Checks if `data` is `undefined`.
 *
 * @param data The data to check.
 * @returns Returns `true` if `data` is `undefined`, else `false`.
 * @example
 *
 * isUndefined()
 * // => true
 *
 * isUndefined(void 0)
 * // => true
 *
 * isUndefined(null)
 * // => false
 */
export default function isUndefined(data?: any): data is undefined {
  return data === undefined;
}
