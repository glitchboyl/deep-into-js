export const string = "boy next door";
export const number = 2333333333333333333333;
export const symbol = Symbol ? Symbol(string) : undefined;
export const bigInt = 2333333333333333333333n;
export const object = { take: "it boy" };
export const array = [2, 3, 3];
export const fn = () => {};
export const asyncFn = async () => {};
export const generator = function* () {};

export const fnInstance = function (text) {
  this.text = text;
};
export const classInstance = class {
  constructor(text) {
    this.text = text;
  }
};

export const regExp = /blind/;
