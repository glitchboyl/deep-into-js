import getPrimitive from "@/is/getPrimitive";

/**
 * Checks if `data` is likely an `arguments` object.
 *
 * @param data The data to check.
 * @returns Returns `true` if `data` is an `arguments` object, else `false`.
 * @example
 *
 * isArguments((function() { return arguments })())
 * // => true
 *
 * isArguments([1, 2, 3])
 * // => false
 */
export default function isArguments(data: any) {
  return getPrimitive(data) === "[object Arguments]";
}