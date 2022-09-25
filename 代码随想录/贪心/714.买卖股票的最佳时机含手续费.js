/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  // 贪心，遍历比对股票最低价格时买入，最高价格时卖出，可以通过更新minPrice来累计收益，确定最大值
  let sum = 0;
  let minPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    //找prices最低点买入(当前价格低于上一轮卖出最高点则开启新一轮买卖)
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    if (prices[i] > minPrice + fee) {
      sum += prices[i] - minPrice - fee;
      //更新minPrice，当下一个价格高于当前价格时，高出部分累计到收益中
      minPrice = prices[i] - fee;
    }
  }

  return sum;
};
// @lc code=end
