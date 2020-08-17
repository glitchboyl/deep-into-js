import getPrimitive from "./getPrimitive";
import isString from "./isString";
import isNumber from "./isNumber";
import isBoolean from "./isBoolean";
import isNull from "./isNull";
import isUndefined from "./isUndefined";
import isSymbol from "./isSymbol";
import isObject from "./isObject";
import isObjectLike from "./isObjectLike";
import isPlainObject from "./isPlainObject";
import isArguments from "./isArguments";

// // These helpers produce better VM code in JS engines due to their explicitness and function inlining.
// export const isDef = (value) => {
//   return value !== null && value !== undefined;
// };

// export const isUndef = (value) => {
//   return value === null || value === undefined;
// };

export {
  getPrimitive,
  isString,
  isNumber,
  isBoolean,
  isNull,
  isUndefined,
  isSymbol,
  isObject,
  isObjectLike,
  isPlainObject,
  isArguments,
};
