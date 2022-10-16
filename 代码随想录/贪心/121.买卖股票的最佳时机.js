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
  // 贪心，该题主要是求一段区间内右边界与左边界最大差值，可以用累加法求收益峰值，也可以直接找最小左边界并不断更新差值中的最大值
  // 累计收益法
  /* if (prices.length == 0) return 0;
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
  return max; */
  // 左右边界法
  let left = prices[0];
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    left = Math.min(left, prices[i]);
    max = Math.max(max, prices[i] - left);
  }
  return max;
};
// @lc code=end
