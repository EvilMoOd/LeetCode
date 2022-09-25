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
  // 回溯
  const res = []
  const backtrack = (s, path, total) => {
    if (total === n && path.length === k) {
      res.push(path)
      return
    } else if (total > n) return//剪枝优化 
    for (s; s <= 9 - (k - path.length) + 1; s++) {//剪枝 优化 因为答案要存在k个数 
      //在集合n中至多要从该起始位置到 9 - (k - path.length) + 1开始遍历 才能拿到足够的元素，参考组合
      backtrack(s + 1, path.concat(s), total + s)
    }
  }
  backtrack(1, [], 0)
  return res
};
// @lc code=end
