class MyPromise {
  constructor(executor) {
    this.state = 'pending';
    this.value = null;
    this.onfulfilledList = [];
    this.onrejectedList = [];
    const resolve = (value) => {
      if (this.state !== 'pending') return;
      this.state = 'fulfilled';
      this.value = value;
      while (this.onfulfilledList.length) {
        this.onfulfilledList.shift()(this.value);
      }
    };
    const reject = (error) => {
      if (this.state !== 'pending') return;
      this.state = 'rejected';
      this.value = error;
      while (this.onrejectedList.length) {
        this.onrejectedList.shift()(this.value);
      }
    };
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onfulfilled, onrejected) {
    // 确保传入为函数
    onfulfilled =
      typeof onfulfilled === 'function' ? onfulfilled : (val) => val;
    onrejected =
      typeof onrejected === 'function'
        ? onrejected
        : (reason) => {
            throw reason;
          };
    // 判断then方法是哪种类型
    let thenPromise = new MyPromise((resolve, reject) => {
      const resolvePromise = (cb) => {
        setTimeout(() => {
          try {
            const x = cb(this.value);
            if (x === thenPromise) {
              throw new Error('不能返回自身');
            }
            if (x instanceof MyPromise) {
              x.then(resolve, reject);
            } else {
              resolve(x);
            }
          } catch (error) {
            reject(error);
            throw new Error(error);
          }
        });
      };
      if (this.state === 'fulfilled') {
        resolvePromise(onfulfilled);
      } else if (this.state === 'rejected') {
        resolvePromise(onrejected);
      } else if (this.state === 'pending') {
        this.onfulfilledList.push(resolvePromise.bind(this, onfulfilled));
        this.onrejectedList.push(resolvePromise.bind(this, onrejected));
      }
    });

    return thenPromise;
  }

  static all(promises) {
    let count = 0;
    const result = [];
    return new MyPromise((resolve, reject) => {
      const fulfill = (value) => {
        result.push(value);
        count++;
        if (count === promises.length) resolve(result);
      };
      promises.forEach((promise) => {
        if (promise instanceof MyPromise) {
          promise.then(
            (res) => {
              fulfill(res);
            },
            (err) => {
              reject(err);
            }
          );
        } else {
          fulfill(promise);
        }
      });
    });
  }
  static race(promises) {
    return new MyPromise((resolve, reject) => {
      promises.forEach((promise) => {
        if (promise instanceof MyPromise) {
          promise.then(
            (res) => {
              resolve(res);
            },
            (err) => {
              reject(err);
            }
          );
        } else {
          resolve(promise);
        }
      });
    });
  }
  static any(promises) {
    let count = 0;
    return new MyPromise((resolve, reject) => {
      promises.forEach((promise) => {
        if (promise instanceof MyPromise) {
          promise.then(
            (res) => {
              resolve(res);
            },
            (err) => {
              count++;
              if (count === promises.length) {
                reject('no resolve');
              }
            }
          );
        } else {
          resolve(promise);
        }
      });
    });
  }
  static allSettled(promises) {
    return new Promise((resolve, reject) => {
      const result = [];
      let count = 0;
      done = (status, value) => {
        result.push({ status, value });
        count++;
        if (count === promises.length) resolve(result);
      };
      promises.forEach((promise, i) => {
        if (promise instanceof MyPromise) {
          promise.then(
            (res) => {
              done('fulfilled', res, i);
            },
            (err) => {
              done('rejected', err, i);
            }
          );
        } else {
          done('fulfilled'.promise, i);
        }
      });
    });
  }
}
