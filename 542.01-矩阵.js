/*
 * @lc app=leetcode.cn id=542 lang=javascript
 *
 * [542] 01 矩阵
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  // dp[i][j]代表结果
  // if(mat[i][j] ==1) dp[i][j]等于 1+Math.min(dp[i-1][j],dp[i][j-1],dp[i+1][j].d[i][j+1])
  // else dp[i][j] = 0
  // 由递推公式可知，我们每次都要求4个方向，这可以说是无法一次性遍历成功的
  // 如果dp[i][j]的最小值是从左边和上边获取，那么它就不需要要求dp[i-1][j]从下面和右边获取，只需要从左边和上边即可
  // 依次类推
  let n = mat.length,
    m = mat[0].length;
  let dp = Array.from(Array(n), () => Array(m));
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++) dp[i][j] = mat[i][j] == 0 ? 0 : Infinity;
  // 先遍历左和上
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i - 1 >= 0) dp[i][j] = Math.min(dp[i][j], 1 + dp[i - 1][j]);
      if (j - 1 >= 0) dp[i][j] = Math.min(dp[i][j], 1 + dp[i][j - 1]);
    }
  }
  //再遍历右和下
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      if (i + 1 < n) dp[i][j] = Math.min(dp[i][j], 1 + dp[i + 1][j]);
      if (j + 1 < m) dp[i][j] = Math.min(dp[i][j], 1 + dp[i][j + 1]);
    }
  }
  return dp;
};
// @lc code=end
