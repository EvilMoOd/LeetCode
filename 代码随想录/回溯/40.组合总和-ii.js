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
  // 回溯
  const res = []
  // 排序去重
  candidates.sort()

  const backtrack = (path, sum, startIndex) => {
    if (sum > target) return;
    if (sum === target) {
      res.push(path);
      return;
    }
    let pre = -1;// 同层树进行去重
    for (let i = startIndex; i < candidates.length; i++) {
      // if (candidates[i] === candidates[i - 1]) continue; 这样写会导致非同层的也被去重
      if (candidates[i] === pre) continue;
      pre = candidates[i];
      backtrack(path.concat(candidates[i]), sum + candidates[i], i + 1);
    }
  };

  backtrack([], 0, 0);
  return res;
};
// @lc code=end

