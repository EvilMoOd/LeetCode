/*
 * @lc app=leetcode.cn id=946 lang=javascript
 *
 * [946] 验证栈序列
 */

// @lc code=start
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  // 模拟，将push数组一边push进栈中一边循环判断pop数组的值是否等于栈顶元素，如果是则循环pop，否组继续压栈继续判断pop
  let stack = [],
    k = 0;
  for (let value of pushed) {
    stack.push(value);
    while (stack.length && stack[stack.length - 1] === popped[k]) {
      stack.pop();
      k++;
    }
  }
  return stack.length === 0;
};
// @lc code=end
