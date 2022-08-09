type Resolve = (value: unknown) => void;
type Reject = (reason?: unknown) => void;
type OnFulfilled =
  | ((value: unknown) => void | PromiseLike<void>)
  | null
  | undefined;
type OnRejected = ((reason: any) => PromiseLike<never>) | null | undefined;
type Executor = (resolve: Resolve, reject: Reject) => void;
class GmPromise {
  private PromiseResult: unknown;
  private PromiseStatus: 'pending' | 'fulfilled' | 'rejected' = 'pending';
  private onFulfilledCallbacks: any = [];
  private onRejectedCallbacks: any = [];

  constructor(executor: Executor) {
    this.initValue();
    try {
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (e) {
      this.reject(e);
    }
  }

  initValue() {
    this.PromiseResult = '';
    this.PromiseStatus = 'pending';
  }

  resolve(value: unknown) {
    this.PromiseStatus = 'fulfilled';
    this.PromiseResult = value;
    while (this.onFulfilledCallbacks.length) {
      this.onFulfilledCallbacks.shift()?.(this.PromiseResult);
    }
  }

  reject(reason?: unknown) {
    this.PromiseStatus = 'rejected';
    this.PromiseResult = reason;
    while (this.onRejectedCallbacks) {
      this.onRejectedCallbacks.shift()?.(this.PromiseResult);
    }
  }

  then(onFulfilled?: OnFulfilled, onRejected?: Reject) {
    // @ts-ignore
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val;
    onRejected = typeof onRejected === 'function' ? onRejected : val => val;

    const thenPromise = new GmPromise((resolve1, reject1) => {
      const resolvePromise = (cb: any) => {
        try {
          const x = cb(this.PromiseResult);
          if (x === thenPromise) {
            // 不能返回自身哦
            throw new Error('不能返回自身。。。');
          }
          if (x instanceof GmPromise) {
            x.then(reject1, reject1);
          } else {
            // 非Promise就直接成功
            reject1(x);
          }
        } catch (err) {
          // 处理报错
          reject1(err);
          throw new Error(err);
        }
      };

      if (this.PromiseStatus === 'fulfilled') {
        onFulfilled?.(this.PromiseResult);
      } else if (this.PromiseStatus === 'rejected') {
        onRejected?.(this.PromiseResult);
      } else if (this.PromiseStatus === 'pending') {
        this.onFulfilledCallbacks(resolvePromise.bind(this, onFulfilled));
        this.onRejectedCallbacks(resolvePromise.bind(this, onRejected));
      }
    });

    return thenPromise;
  }

  all(promises: any[]) {
    const result: unknown = [];
    let count = 0;
    return new GmPromise((resolve1, reject1) => {
      const addData = (index: number, value: any) => {
        // @ts-ignore
        result[index] = value;
        count++;
        if (count === promises.length) {
          resolve1(result);
        }
      };

      promises.forEach((p, index) => {
        if (p instanceof GmPromise) {
          p.then(
            r => {
              addData(index, r);
            },
            err => reject1(err),
          );
        } else {
          addData(index, p);
        }
      });
    });
  }
}

function test() {
  return new Promise((resolve, reject) => {
    resolve('ok');
  });
}
test().then(res => {
  setTimeout(() => {
    console.log(res);
  });
});
