import isFunction from "@/is/isFunction";
import apply from "../apply";

/**
 * For a given function, creates a bound function that has the same body as the original function.
 * The this object of the bound function is associated with the specified object, and has the specified initial parameters.
 *
 * @param callee a `Function` type object.
 * @return Function
 */
export default function bind<T extends (...args: any) => any>(callee: T) {
  if (!isFunction(callee)) {
    throw new TypeError(`${callee} is not a function.`);
  }

  const fn = function () {};

  if (callee.prototype) {
    fn.prototype = callee.prototype;
  }

  /**
   * Creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
   *
   * @param thisArg An object to which the this keyword can refer inside the new function.
   * @param argArray A list of arguments to be passed to the new function.
   * @return A copy of the given function with the specified `this` value, and initial arguments (if provided).
   */
  return function (thisArg: any, ...argArray: Parameters<T>) {
    const argsLength = argArray.length; // record base arguments length.

    const bound = function (...args: any[]) {
      argArray.length = argsLength; // reset to default base arguments.

      apply(Array.prototype.push)(argArray, args);
      return apply(callee)(
        fn.prototype.isPrototypeOf(this) ? this : thisArg,
        argArray
      );
    };
    bound.prototype = new (fn as any)();

    Reflect.defineProperty(bound, "name", {
      get() {
        return `bound ${callee.name}`;
      },
    });

    return bound;
  };
}
