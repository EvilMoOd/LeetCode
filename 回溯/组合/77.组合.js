/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = [];
  const backtrack = (path, start) => {
    if (path.length === k) {
      res.push(path);
      return;
    }
    for (let i = start; i <= n; i++) backtrack(path.concat(i), i + 1);
  };
  backtrack([], 1);
  return res;
  // 回溯组合入门题
};
// @lc code=end
