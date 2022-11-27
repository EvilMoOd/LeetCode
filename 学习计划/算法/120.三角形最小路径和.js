/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  // 动态规划计算出每条路径长度取最短即可
  const dp = [].concat(triangle);
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (j === 0) dp[i][j] = dp[i - 1][j] + triangle[i][j];
      else if (j === triangle[i].length - 1)
        dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
      else dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
    }
  }
  return Math.min(...dp[triangle.length - 1]);
};
// @lc code=end
