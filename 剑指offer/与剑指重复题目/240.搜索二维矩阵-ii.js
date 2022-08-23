/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const arr = matrix.filter(
    (item) => item[0] <= target && item[item.length - 1] >= target
  );
  for (let a of arr) {
    for (let i of a) {
      if (i === target) return true;
    }
  }
  return false;
};
// @lc code=end
