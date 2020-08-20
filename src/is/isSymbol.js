import getPrimitive from "./getPrimitive";

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @param value The value to check.
 * @returns Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * isSymbol(Symbol.iterator)
 * // => true
 *
 * isSymbol('boy next door')
 * // => false
 */
const isSymbol = (value) => {
  return typeof value === "symbol" || getPrimitive(value) === "[object Symbol]";
};

export default isSymbol;
