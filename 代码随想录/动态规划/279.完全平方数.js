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
  // 动态规划背包问题，求最小数
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;
  // 先遍历背包，再放入物品
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j ** 2 < i; j++) {
      dp[i] = Math.min(dp[i - j ** 2] + 1, dp[i]);
    }
  }
  return dp[n]
};
// @lc code=end
