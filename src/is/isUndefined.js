/**
 * Checks if `value` is `undefined`.
 *
 * @param value The value to check.
 * @returns Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * isUndefined(void 0)
 * // => true
 *
 * isUndefined(null)
 * // => false
 */
const isUndefined = (value) => {
  return value === undefined;
};

export default isUndefined;
