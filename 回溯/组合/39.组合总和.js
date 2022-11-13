/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = [];
  const backtrack = (path, sum, startIndex) => {
    if (sum > target) return;
    if (sum === target) res.push(path);
    for (let i = startIndex; i < candidates.length; i++)
      backtrack(path.concat(candidates[i]), sum + candidates[i], i);
  };
  backtrack([], 0, 0);
  return res;
  // 回溯组合题，本题有两个注意的点：本题可以重复使用元素，但不能出现重复组合
  // 所以需要用startIndex来限制，防止出现排列的情况，向下传递时只要从当前元素开始，即符合上述两个要点
};
// @lc code=end
