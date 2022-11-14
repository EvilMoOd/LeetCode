/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let res = 0;
  for (let i = 1; i < prices.length; i++) {
    let m = prices[i] - prices[i - 1];
    if (m > 0) res += m;
  }
  return res;
  // 贪心入门题
};
// @lc code=end
