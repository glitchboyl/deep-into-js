import isFunction from "is/isFunction";
import call from "./call";
import apply from "./apply";
import bind from "./bind";

/**
 * Extension the function and will return the methods: `call`, `apply`, `bind`.
 *
 * @param callee a `Function` type object.
 * @return object
 */
const extend = (callee) => {
  if (!isFunction(callee)) {
    throw new TypeError(`${callee} is not a function.`);
  }

  return {
    call: (thisArg, ...args) => call(callee)(thisArg, ...args),
    apply: (thisArg, args) => apply(callee)(thisArg, args),
    bind: (thisArg, ...args) => bind(callee)(thisArg, ...args),
  };
};

export { call, apply, bind };

export default extend;
