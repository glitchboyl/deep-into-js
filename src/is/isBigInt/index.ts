import getPrimitive from "@/is/getPrimitive";

/**
 * Checks if `data` is classified as a `BigInt` primitive or object.
 *
 * @param data The data to check.
 * @returns Returns `true` if `data` is a big-int, else `false`.
 * @example
 *
 * isString(2333n)
 * // => true
 *
 * isString(2333)
 * // => false
 */
export default function isBigInt(data: unknown): data is BigInt {
  return getPrimitive(data) === "[object BigInt]";
}
