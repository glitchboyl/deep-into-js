import isFunction from "@/is/isFunction";
import call from "@/functionExtends/call";

/**
 * Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
 *
 * @param callee a `Function` type object.
 * @return Function
 */
export default function apply<T extends (...args: any) => any>(callee: T) {
  if (!isFunction(callee)) {
    throw new TypeError(`${callee} is not a function.`);
  }

  /**
   * calls a function with a given `this` value, and `arguments` provided as an array (or an array-like object).
   *
   * @param thisArg The object to be used as the this object.
   * @param argArray A set of arguments to be passed to the function.
   * @return The result of calling the function with the specified `this` value and arguments.
   */
  return function (
    thisArg: any,
    argArray: Parameters<T> = [] as Parameters<T>
  ) {
    return call(callee)(thisArg, ...argArray);
  };
}
