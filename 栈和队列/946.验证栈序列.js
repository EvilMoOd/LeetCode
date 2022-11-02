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
  let res = [];
  let cur = 0;
  for (const i of pushed) {
    if (i === popped[cur]) {
      cur++;
      while (res.length && res[res.length - 1] === popped[cur]) {
        res.pop();
        cur++;
      }
    } else {
      res.push(i);
    }
  }
  return !res.length;
};
// @lc code=end
