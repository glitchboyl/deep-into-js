import getPrimitive from "@/is/getPrimitive";

/**
 * Checks if `data` is classified as a `Boolean` primitive or object.
 *
 * @param data The data to check.
 * @returns Returns `true` if `data` is a boolean, else `false`.
 * @example
 *
 * isBoolean(false)
 * // => true
 *
 * isBoolean('boy next door')
 * // => false
 *
 * isBoolean(2333)
 * // => false
 *
 * isBoolean(null)
 * // => false
 */
export default function isBoolean(data: any): data is Boolean {
  return getPrimitive(data) === "[object Boolean]";
}
