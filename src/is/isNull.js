/**
 * Checks if `value` is `null`.
 *
 * @param value The value to check.
 * @returns Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * isNull(null)
 * // => true
 *
 * isNull(void 0)
 * // => false
 */
const isNull = (value) => {
  return value === null;
};

export default isNull;
