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
  // 上到下，左到右升序，如果从左上角走的话要走两个方向，递归会超时
  // 如果从左下角走，走的方式就会单一起来，大于目标值往上走，小于目标值往右走
  let i = matrix.length - 1,
    j = 0;
  while (i !== -1 && j !== matrix[0].length) {
    if (matrix[i][j] > target) i--;
    else if (matrix[i][j] < target) j++;
    else return true;
  }
  return false;
};
// @lc code=end
