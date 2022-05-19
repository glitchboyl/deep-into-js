import getPrimitive from "@/is/getPrimitive";

/**
 * Checks if `data` is classified as a `Number` primitive or object.
 *
 * @param data The data to check.
 * @returns Returns `true` if `data` is a number, else `false`.
 * @example
 *
 * isString(2333)
 * // => true
 *
 * isString('boy next door')
 * // => false
 */
export default function isNumber(data: any) {
  return getPrimitive(data) === "[object Number]";
}
