import getPrimitive from "@/is/getPrimitive";

/**
 * Checks if `data` is classified as a `Array` primitive or object.
 *
 * @param data The data to check.
 * @returns Returns `true` if `data` is a array, else `false`.
 * @example
 *
 * isArray([])
 * // => true
 *
 * isArray('boy next door')
 * // => false
 */
export default function isArray(data: any) {
  return getPrimitive(data) === "[object Array]";
}
