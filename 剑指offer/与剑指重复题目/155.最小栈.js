/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start

/* 如果用变量记录min的话，则如果pop的是最小值时将丢失最小值
所以用两个栈，另一个栈同步记录当前栈的最小值
也就是每次push和pop时都会在另一个栈保存当前所有元素的最小值 */

var MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  !this.minStack.length
    ? this.minStack.push(val)
    : this.minStack.push(Math.min(this.getMin(), val));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.minStack.pop();
  return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
