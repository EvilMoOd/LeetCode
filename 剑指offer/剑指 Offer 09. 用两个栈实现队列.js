var CQueue = function () {
  this.queue = [];
  this.stack = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.queue.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  // 本题只关心压栈和弹栈,不用理会队列变化
  if (this.stack.length === 0) {
    while (this.queue.length !== 0) {
      this.stack.push(this.queue.pop());
    }
  }
  return this.stack.pop() || -1;
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
