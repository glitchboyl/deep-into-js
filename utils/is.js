const { assign, create, freeze } = Object;

/**
 * Get the raw type string of a value, e.g., `[object Type]`.
 * @param {any} value The value to query.
 * @returns {string}
 */
export const getPrimitive = (value) => {
  return Object.prototype.toString.call(value);
};

/**
 * Checks if `value` is classified as a `String` primitive or object.
 * @param {any} value The value to query.
 * @returns {boolean}
 */
export const isString = (value) => {
  return typeof value === "string" || getPrimitive(value) === "[object String]";
};

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 * @param {any} value The value to query.
 * @returns {boolean}
 */
export const isNumber = (value) => {
  return typeof value === "number" || getPrimitive(value) === "[object Number]";
};

/**
 * Checks if `value` is classified as a `Boolean` primitive or object.
 * @param {any} value The value to query.
 * @returns {boolean}
 */
export const isBoolean = (value) => {
  return (
    typeof value === "boolean" || getPrimitive(value) === "[object Boolean]"
  );
};

/**
 * Quick object check - this is primarily used to tell Objects from primitive values when we know the value is a JSON-compliant type..
 * @param {any} value The value to query.
 * @returns {boolean}
 */
export const isObject = (value) => {
  const type = typeof value;
  return value !== null && (type === "object" || type === "function");
};

/**
 * Checks if `value` is object-like. A object-like value is not `null` and has `typeof` result of `object`.
 * @param {any} value The value to query.
 * @returns {boolean}
 */
export const isObjectLike = (value) => {
  return value !== null && typeof value === "object";
};

/**
 * Strict object type check. Only returns true for plain JavaScript objects.
 * @param {any} value The value to query.
 * @returns {boolean}
 */
export const isPlainObject = (value) => {
  return typeof value === "object" && getPrimitive(value) === "[object Object]";
};

/**
 * Checks if `value` is arguments object.
 * @param {any} value The value to query.
 * @returns {boolean}
 */
export const isArguments = (value) => {
  return isObjectLike(value) && getPrimitive(value) === "[object Arguments]";
};

// These helpers produce better VM code in JS engines due to their explicitness and function inlining.
export const isDef = (value) => {
  return value !== null && value !== undefined;
};

export const isUndef = (value) => {
  return value === null || value === undefined;
};

export default freeze(
  assign(create(null), {
    getPrimitive,
    isString,
    isNumber,
    isBoolean,
    isObject,
    isObjectLike,
    isPlainObject,
    isArguments,
    isDef,
    isUndef,
  })
);
