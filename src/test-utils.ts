import fakeTimers from "@sinonjs/fake-timers";
import type { Obj } from "./types";

export const string = "boy next door";
export const number = 2333;
export const symbol = Symbol?.(string) ?? undefined;
export const bigInt = 2333n;
export const object: Obj = { take: "it boy" };
export const array = [2, 3, 3, 3];
export const fn = () => {};
export const asyncFn = async () => {};
export const generator = function* () {};

export const fnInstance = function (text: unknown) {
  this.text = text;
};
export const classInstance = class {
  [key: string]: unknown;
  constructor(text: unknown) {
    this.text = text;
  }
};

export const regExp = /blind/;

// wait time
const clock = fakeTimers.install();
export const wait = (time = 0) =>
  new Promise((res) => {
    setTimeout(res, time);
    clock.tick(time);
  });
