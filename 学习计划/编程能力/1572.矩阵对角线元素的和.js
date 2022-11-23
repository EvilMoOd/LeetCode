/*
 * @lc app=leetcode.cn id=1572 lang=javascript
 *
 * [1572] 矩阵对角线元素的和
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let res = 0;
  let left = 0,
    right = mat.length - 1;
  for (let i = 0; i < mat.length; i++) {
    left === right
      ? (res += mat[i][left])
      : (res += mat[i][left] + mat[i][right]);
    left++;
    right--;
  }
  return res;
};
// @lc code=end
