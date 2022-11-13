/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const res = [];
  candidates.sort((a, b) => a - b);
  const backtrack = (path, sum, startIndex) => {
    if (sum > target) return;
    if (sum === target) res.push(path);
    for (let i = startIndex; i < candidates.length; i++) {
      if (i !== startIndex && candidates[i] === candidates[i - 1]) continue;
      backtrack(path.concat(candidates[i]), sum + candidates[i], i + 1);
    }
  };
  backtrack([], 0, 0);
  return res;
};
// @lc code=end
