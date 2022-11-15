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
  let res = 0;
  let min = Infinity;
  for (const i of prices) {
    min = Math.min(min, i);
    res = Math.max(res, i - min);
  }
  return res;
  // 贪心，因为只买卖一次，所以只要找到左边最低点右边最高点即可
  // 从左到右遍历更新最低点和最大差值即可
};
// @lc code=end
