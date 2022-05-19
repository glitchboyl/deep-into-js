## 深入学习 JavaScript

~也就是所谓的[前端八股文](https://juejin.cn/post/7016593221815910408#heading-48)~

1. JavaScript 类型检测
   - [Primitive](src/is/getPrimitive/index.ts) ✔
   - [String](src/is/isString.ts) ✔
   - [Number](src/is/isNumber.ts) ✔
   - [Boolean](src/is/isBoolean.ts) ✔
   - [null](src/is/isNull.ts) ✔
   - [undefined](src/is/isUndefined.ts) ✔
   - [Symbol](src/is/isSymbol.ts) ✔
   - [BigInt](src/is/isBigInt.ts) ✔
   - [Object](src/is/isObject.ts) (typeof is `object` or `function`, but not `null`.) ✔
   - [Object Like](src/is/isObjectLike.ts) (typeof is `object`, but not `null`.) ✔
   - [Plain Object](src/is/isPlainObject.ts) (object which it is containing zero or more key-value pairs.) ✔
   - [Array](src/is/isArray.ts) ✔
   - [Function](src/is/isFunction.ts) ✔
   - [Arguments](src/is/isArguments.js) ✔
2. [new 运算符](src/new/index.ts) ✔
3. [call](src/functionExtends/call/index.ts), [apply](src/functionExtends/apply/index.ts), [bind](src/functionExtends/bind/index.ts) ✔
4. 柯里化 (currying)
5. 防抖 (debounce)
6. 节流 (throttle)
7. Promise
8. 数组扩展方法
   - from
   - of
   - flat
   - flatMap
   - sort
   - reduce
9. 设计模式
   - 单例模式
   - 观察者模式
10. ......

~~多看看 📕 你这崽种.~~
~我想加上类型体操但是好tm难，等我去寒窗苦读研究TS再来完善~