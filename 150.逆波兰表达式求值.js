/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let map = new Map([
    ['+', (a, b) => a * 1 + b * 1],
    ['-', (a, b) => b - a],
    ['*', (a, b) => a * b],
    ['/', (a, b) => (b / a) | 0],
  ]);
  const stack = [];
  for (const i of tokens) {
    if (!map.has(i)) {
      stack.push(i);
      continue;
    }
    stack.push(map.get(i)(stack.pop(), stack.pop()));
  }
  return stack.pop();
};
// @lc code=end
