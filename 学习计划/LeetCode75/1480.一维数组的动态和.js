/*
 * @lc app=leetcode.cn id=1480 lang=javascript
 *
 * [1480] 一维数组的动态和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  // 动态规划最入门题
  if (!nums.length) return nums;
  const dp = [nums[0]];
  for (let i = 1; i < nums.length; i++) dp[i] = nums[i] + dp[i - 1];
  return dp;
};
// @lc code=end
