/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  // 动态规划，遍历每个元素，以其作为正方形右下角，dp出该正方形的大小
  let m = matrix.length;
  let n = matrix[0].length;
  let res = 0;
  let dp = Array.from(Array(m), () => Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === '1') {
        if (i === 0 || j === 0) dp[i][j] = 1;
        else
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }
      res = Math.max(dp[i][j], res);
    }
  }
  return res * res;
};
// @lc code=end
