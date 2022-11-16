/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  // 求括号的排列，用回溯法解决
  // 规定左右括号的数量，当左括号未达到指定数量时，添加到路径中往下递归，同一层中如果右括号的数量小于左括号时，则补充右括号，枚举出所有可行的情况添加到结果数组中
  const res = [];
  const backtrack = (path, left, right) => {
    if (path.length === 2 * n) {
      res.push(path);
      return;
    }
    if (left > 0) backtrack(path + '(', left - 1, right);
    if (right > left) backtrack(path + ')', left, right - 1);
  };
  backtrack('', n, n);
  return res;
};
// @lc code=end
