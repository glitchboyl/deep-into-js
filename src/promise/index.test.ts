import _Promise from "./";
import { wait } from "@/test-utils";

describe("Promise", () => {
  it("may work", async () => {
    let value = 1;
    const promise = new _Promise<Number>((resolve, reject) => {
      setTimeout(() => resolve(2), 1000);
    });

    promise
      .then((res: any) => {
        setTimeout(() => (value = res), 1);
        return 3;
      })
      .then((res: any) => {
        setTimeout(() => {
          value = res;
        }, 1000);
        return 4;
      })
      .then((res: any) => {
        value = res;
      });

    expect(value).toMatchInlineSnapshot('1');
    await wait(500);
    expect(value).toMatchInlineSnapshot('1');
    await wait(500);
    expect(value).toMatchInlineSnapshot('4');
    await wait(1);
    expect(value).toMatchInlineSnapshot('2');
    await wait(1000);
    expect(value).toMatchInlineSnapshot('3');
  });
});
