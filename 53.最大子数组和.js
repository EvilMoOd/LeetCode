/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = -Infinity;
  let sum = 0;
  for (const i of nums) {
    sum += i;
    max = Math.max(max, sum);
    if (sum < 0) sum = 0;
  }
  return max;
  // 贪心入门
};
// @lc code=end
