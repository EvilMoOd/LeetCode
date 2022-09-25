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
  let res = []
  // 还是老样子，回溯参数是路径、路径值。这里是组合非排序，故要用startIndex来限制递归遍历的节点
  let backtrack = (path, sum, startIndex) => {
    if (sum > target) return
    if (sum === target) {
      res.push(path)
      return
    }
    for (let i = startIndex; i < candidates.length; i++) {
      backtrack(path.concat(candidates[i]), sum + candidates[i], i)
    }
  }
  backtrack([], 0, 0)
  return res
};
// @lc code=end

