import { isNull, isUndefined, isObject, isFunction } from "@/is";

/**
 * Calls a method of an object, substituting another object for the current object.
 *
 * @param callee a `Function` type object.
 * @return Function
 */
export default function call<T extends (...args: any) => any>(callee: T) {
  if (!isFunction(callee)) {
    throw new TypeError(`${callee} is not a function.`);
  }

  /**
   * Calls a function with a given this value and arguments provided individually.
   *
   * @param thisArg The object to be used as the current object.
   * @param argArray A list of arguments to be passed to the method.
   * @return The result of calling the function with the specified `this` value and arguments.
   */
  return function (thisArg: any, ...argArray: Parameters<T>) {
    if (isNull(thisArg)) {
      return callee(...(argArray as any));
    }
    thisArg = isUndefined(thisArg)
      ? window
      : isObject(thisArg)
      ? thisArg
      : Object(thisArg);

    const symbolId = Symbol("callee");
    thisArg[symbolId] = callee;
    const result = thisArg[symbolId](...(argArray as any)) || thisArg;
    Reflect.deleteProperty(thisArg, symbolId);

    return result;
  };
}
