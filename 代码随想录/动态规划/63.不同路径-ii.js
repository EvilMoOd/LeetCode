/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (obstacleGrid[0][0] === 1) return 0;
  let dp = [];
  let m = obstacleGrid.length,
    n = obstacleGrid[0].length;
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n).fill(0);
  }
  for (let i = 0; i < m && obstacleGrid[i][0] === 0; i++) dp[i][0] = 1;
  for (let j = 0; j < n && obstacleGrid[0][j] === 0; j++) dp[0][j] = 1;
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) continue;
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};
// @lc code=end
