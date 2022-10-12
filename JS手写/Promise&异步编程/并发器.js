/* JS 实现一个带并发限制的异步调度器 Scheduler，保证同时运行的任务最多有两个

addTask(1000,"1");
addTask(500,"2");
addTask(300,"3");
addTask(400,"4");
的输出顺序是：2 3 1 4

整个的完整执行流程：

一开始1、2两个任务开始执行
500ms时，2任务执行完毕，输出2，任务3开始执行
800ms时，3任务执行完毕，输出3，任务4开始执行
1000ms时，1任务执行完毕，输出1，此时只剩下4任务在执行
1200ms时，4任务执行完毕，输出4 */

class Scheduler {
  // 需求包括添加、开始、并发执行三个功能
  constructor(limit) {
    this.limit = limit;
    this.queue = [];
  }
  // 将promise的高阶函数（惰性函数）存入队列中
  add(time, str) {
    const task = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(str);
          resolve();
        }, time);
      });
    };
    this.queue.push(task);
  }
  // 按限制数执行limit个任务
  start() {
    for (let i = 0; i < this.limit; i++) {
      this.emit();
    }
  }
  // 执行任务并且当一个任务执行完后再执行下一个任务
  emit() {
    if (!this.queue.length) return;
    this.queue
      .shift()()
      .then(() => {
        this.emit();
      });
  }
}