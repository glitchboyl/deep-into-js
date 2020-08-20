const { toString } = Object.prototype;

/**
 * Gets the `toStringTag` of `value`.
 * 
 * @param value The value to query.
 */
const getPrimitive = (value) => {
  return toString.call(value);
};

export default getPrimitive;
