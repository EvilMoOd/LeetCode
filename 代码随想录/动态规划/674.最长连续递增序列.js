/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  // 动态规划，用贪心也可以，跟股票问题一样
  const dp = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] > nums[i]) dp[i + 1] = dp[i] + 1;
  }
  return Math.max(...dp);
};
// @lc code=end
