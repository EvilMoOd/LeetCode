/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  // 水平轴翻转
  for (let i = 0; i < Math.floor(matrix.length / 2); i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      [matrix[i][j], matrix[matrix.length - 1 - i][j]] = [
        matrix[matrix.length - 1 - i][j],
        matrix[i][j],
      ];
    }
  }
  // 左上右下为轴翻转
  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  // 考虑到不增加额外空间的原地旋转，所以直接用交换（原地操作数组一般都是交换）
};
// @lc code=end
