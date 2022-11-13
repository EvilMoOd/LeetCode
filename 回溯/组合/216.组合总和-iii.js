/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const res = [];
  const backtrack = (path, sum, start) => {
    if (sum > n) return;
    if (sum === n && path.length === k) res.push(path);
    for (let i = start; i <= 9; i++) backtrack(path.concat(i), sum + i, i + 1);
  };
  backtrack([], 0, 1);
  return res;
  // 回溯组合入门题，该题限制条件为路径长度等于k
};
// @lc code=end
