import getPrimitive from "@/is/getPrimitive";

/**
 * Checks if `data` is classified as a `Symbol` primitive or object.
 *
 * @param data The data to check.
 * @returns Returns `true` if `data` is a symbol, else `false`.
 * @example
 *
 * isSymbol(Symbol('boy next door'))
 * // => true
 */
export default function isSymbol(data: any) {
  return getPrimitive(data) === "[object Symbol]";
}
