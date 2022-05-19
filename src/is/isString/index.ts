import getPrimitive from "@/is/getPrimitive";

/**
 * Checks if `data` is classified as a `String` primitive or object.
 *
 * @param data The data to check.
 * @returns Returns `true` if `data` is a string, else `false`.
 * @example
 *
 * isString('boy next door')
 * // => true
 *
 * isString(2333)
 * // => false
 */
export default function isString(data: any) {
  return getPrimitive(data) === "[object String]";
}
