import isObject from "@/is/isObject";
import isFunction from "@/is/isFunction";

/**
 * The `New` operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.
 *
 * @param constructor A function that specifies the type of the object instance.
 * @param args A list of values that the constructor will be called with.
 */
export default function _new(constructor: Function, ...args: any[]) {
  if (!isFunction(constructor)) {
    throw new TypeError(`${constructor} is not a constructor.`);
  }

  const instance = Object.create(constructor.prototype);
  const result = constructor.apply(instance, args);

  return isObject(result) ? result : instance;
}
