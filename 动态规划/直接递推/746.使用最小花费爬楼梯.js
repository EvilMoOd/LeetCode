/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const dp = [cost[0], cost[1]];
  for (let i = 2; i < cost.length; i++)
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  return Math.min(dp[dp.length - 1], dp[dp.length - 2]);
  // 动规dp出各个情况下需花费最小值即可
  // 这题虽然很像贪心，但不能用贪心解题，因为无法从局部最优推出全局最优
};
// @lc code=end
