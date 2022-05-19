/**
 * Checks if `data` is `null`.
 *
 * @param data The data to check.
 * @returns Returns `true` if `data` is `null`, else `false`.
 * @example
 *
 * isNull(null)
 * // => true
 *
 * isNull(void 0)
 * // => false
 */
export default function isNull(data: any) {
  return data === null;
}
