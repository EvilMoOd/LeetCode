/*
 * @lc app=leetcode.cn id=566 lang=javascript
 *
 * [566] 重塑矩阵
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  // 简单的矩阵元素转换题，注意题目要求如果矩阵参数不同的话不进行转换
  const m = mat.length;
  const n = mat[0].length;
  if (m * n !== r * c) return mat;
  const res = Array.from(Array(r), () => Array(c));
  for (let i = 0; i < m * n; ++i)
    res[Math.floor(i / c)][i % c] = mat[Math.floor(i / n)][i % n];
  return res;
};
// @lc code=end
