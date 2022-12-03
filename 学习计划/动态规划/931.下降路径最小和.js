/*
 * @lc app=leetcode.cn id=931 lang=javascript
 *
 * [931] 下降路径最小和
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  // 从上往下递归出每条路径，选最小的一条即可，和杨辉三角形类似的移动思路
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (j === 0)
        matrix[i][j] =
          Math.min(matrix[i - 1][j], matrix[i - 1][j + 1]) + matrix[i][j];
      else if (j === matrix[0].length - 1)
        matrix[i][j] =
          Math.min(matrix[i - 1][j], matrix[i - 1][j - 1]) + matrix[i][j];
      else matrix[i][j] =
        Math.min(matrix[i - 1][j], matrix[i - 1][j + 1], matrix[i - 1][j - 1]) +
        matrix[i][j];
    }
  }
  return Math.min(...matrix[matrix.length - 1]);
};
// @lc code=end
