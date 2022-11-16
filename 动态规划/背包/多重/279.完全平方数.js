/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;
  // 先遍历背包，再放入物品
  for (let i = 0; i <= n; i++) {
    for (let j = i ** 2; j <= n; j++)
      dp[j] = Math.min(dp[j - i ** 2] + 1, dp[j]);
  }
  return dp[n];
};
// @lc code=end
