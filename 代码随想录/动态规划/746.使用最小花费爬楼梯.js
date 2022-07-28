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
  // 动态规划，爬台阶cost与之前爬过的台阶有关
  // 到目标台阶总存在已规划好的两种情况，只需取两种情况最小cost值即可
  let dp = [cost[0], cost[1]];
  for (let i = 2; i < cost.length; i++) {
    // 动态规划两条路线取cost最小的一条继续往下规划
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }
  return Math.min(dp[cost.length - 1], dp[cost.length - 2]);
};
// @lc code=end
