/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 贪心
  if (prices.length == 0) return 0;
  let cha = [];
  for (let i = 0; i < prices.length - 1; i++) {
    cha[i] = prices[i + 1] - prices[i];
  }
  let max = 0,
    count = 0;
  for (const i of cha) {
    max = Math.max((count += i), max);
    if (count < 0) count = 0;
  }
  return max;
};
// @lc code=end
