/*
 * @lc app=leetcode.cn id=1523 lang=javascript
 *
 * [1523] 在区间范围内统计奇数数目
 */

// @lc code=start
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
  if (high & 1 && low & 1) return Math.ceil((high - low) / 2) + 1;
  else return Math.ceil((high - low) / 2);
};
// @lc code=end
