import isObject from "is/isObject";

/**
 * The `New` operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.
 *
 * @param {function} constructor A function that specifies the type of the object instance.
 * @param {...any} params A list of values that the constructor will be called with.
 * @returns {object}
 */
export default function New(constructor, ...args) {
  if (typeof constructor !== "function") {
    throw new TypeError(`${constructor} is not a constructor.`);
  }

  const instance = Object.create(constructor.prototype);
  const result = constructor.apply(instance, args);

  return isObject(result) ? result : instance;
}
