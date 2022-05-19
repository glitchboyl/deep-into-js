/**
 * Get the primitive type string tag of `data`.
 *
 * @param data The data to query.
 */
export default function getPrimitive(data: any) {
  return Object.prototype.toString.call(data);
}

// In addition to this method, there have also:
// 1. `typeof()`
// But it can not recognize `Array` and `Null`, it will recognize them as `Object`.
//
// 2. `instanceof()`
// It can recognize `Array`, but it can not recognize `String`, `Number` and `Boolean`.
//
// In summary, `Object.prototype.toString.call()` is the best way to get primitive type of data.
