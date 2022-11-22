/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 1) return [[1]];
  const res = [[1], [1, 1]];
  for (let i = 2; i < numRows; i++) {
    res[i] = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) res[i][j] = 1;
      else res[i][j] = res[i - 1][j] + res[i - 1][j - 1];
    }
  }
  return res;
};
// @lc code=end
