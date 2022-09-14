/* 实现一个LazyMan，可以按照以下方式调用:
LazyMan(“Hank”)输出:
Hi! This is Hank!

LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
Hi! This is Hank!
//等待10秒..
Wake up after 10
Eat dinner~

LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
Hi This is Hank!
Eat dinner~
Eat supper~

LazyMan(“Hank”).eat(“supper”).sleepFirst(5)输出
//等待5秒
Wake up after 5
Hi This is Hank!
Eat supper */

class _lazyMan {
  constructor(name) {
    const fn = () => {
      console.log(`Hi! This is ${name}`);
      this.next();
    };
    this.tasks = [];
    this.tasks.push(fn);
    setTimeout(() => {
      this.next();
    });
  }
  next() {
    const task = this.tasks.shift();
    task && task();
  }
  sleep(delay) {
    this.sleepWrapper(delay);
    return this;
  }
  sleepFirst(delay) {
    this.sleepWrapper(delay, true);
    return this;
  }
  sleepWrapper(time, first) {
    const fn = () => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`);
        this.next();
      }, time * 1000);
    };
    if (first) {
      this.tasks.unshift(fn);
    } else {
      this.tasks.push(fn);
    }
  }
  eat(food) {
    const fn = () => {
      console.log(`Eat ${food}`);
      this.next();
    };
    this.tasks.push(fn);
    return this;
  }
}

const LazyMan = (name) => {
  return new _lazyMan(name);
};