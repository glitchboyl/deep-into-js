import { isFunction } from "@/is";

// View on:
// https://www.promisejs.org/implementing/
// https://medium.com/@nsready/implementing-promise-in-typescript-2a8a017d821c

interface Thenable {
  then(callback: Function): Thenable;
  catch(callback: Function): Thenable;
  finally(callback: Function): Thenable;
}

const enum STATUS {
  PENDING = 0,
  FULFILLED = 1,
  REJECTED = 2,
}

export type PromiseResolveCallback<T> = (value: T) => void;
export type PromiseRejectCallback = (reason?: any) => void;
export type PromiseExecutor<T> = (
  resolveCallback: PromiseResolveCallback<T>,
  rejectCallback: PromiseRejectCallback
) => void;

export default class _Promise<T = unknown> implements Thenable {
  private status: STATUS = STATUS.PENDING;
  private thenCallbacks: PromiseResolveCallback<T>[] = [];
  private catchCallback: Function | undefined;
  private finallyCallback: PromiseResolveCallback<T> | undefined;
  private value!: T;
  private error: Error | undefined;

  constructor(executor: PromiseExecutor<T>) {
    executor(this.resolve.bind(this), this.reject.bind(this));
  }

  private resolve(result: T) {
    this.status = STATUS.FULFILLED;
    this.value = result;
    for (const thenCallback of this.thenCallbacks) {
      this.value = thenCallback(this.value)!;
    }
    if (isFunction(this.finallyCallback)) {
      this.finallyCallback(this.value);
    }
  }

  private reject(reason: any) {
    this.status = STATUS.REJECTED;
    this.error = reason;
    if (isFunction(this.catchCallback)) {
      this.catchCallback(this.error);
    }
    if (isFunction(this.finallyCallback)) {
      this.finallyCallback(this.value);
    }
  }

  public then(callback: PromiseResolveCallback<T>): _Promise<T> {
    if (this.status === STATUS.FULFILLED) {
      this.value = callback(this.value)!;
    } else {
      this.thenCallbacks.push(callback);
    }
    return this;
  }

  public catch(callback: PromiseRejectCallback): _Promise<T> {
    if (this.status === STATUS.REJECTED) {
      callback(this.error);
    } else {
      this.catchCallback = callback;
    }
    return this;
  }

  public finally(callback: PromiseResolveCallback<T>): _Promise<T> {
    if (this.status === STATUS.FULFILLED || this.status === STATUS.REJECTED) {
      callback(this.value);
    } else {
      this.finallyCallback = callback;
    }
    return this;
  }
}
