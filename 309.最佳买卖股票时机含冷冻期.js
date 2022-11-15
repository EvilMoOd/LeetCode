/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length === 1) {
    return 0;
  } else if (prices.length === 2) {
    return Math.max(0, prices[1] - prices[0]);
  }

  let dp = Array.from(Array(prices.length), () => Array(4).fill(0));
  dp[0][0] = 0 - prices[0];

  for (i = 1; i < prices.length; i++) {
    // 买入持有股票，昨天可能在状态一、二、四
    dp[i][0] = Math.max(
      dp[i - 1][0],
      Math.max(dp[i - 1][1], dp[i - 1][3]) - prices[i]
    );
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][3]);
    dp[i][2] = dp[i - 1][0] + prices[i];
    // 昨日冷冻期，今日与昨日收益相同
    dp[i][3] = dp[i - 1][2];
  }

  return Math.max(
    dp[prices.length - 1][1],
    dp[prices.length - 1][2],
    dp[prices.length - 1][3]
  );
};
// @lc code=end
