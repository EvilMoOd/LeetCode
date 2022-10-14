/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // 动态规划，这一题多了一个首尾相邻的限制条件，那么就有取首不取尾和取尾不取首两种情况
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  // 取头
  const dp1 = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < nums.length - 1; i++) {
    dp1[i] = Math.max(nums[i] + dp1[i - 2], dp1[i - 1]);
  }
  // 取尾
  const dp2 = [nums[1], Math.max(nums[1], nums[2])];
  for (let i = 2; i < nums.length - 1; i++) {
    dp2[i] = Math.max(nums[i + 1] + dp2[i - 2], dp2[i - 1]);
  }
  // 比较返回
  return Math.max(dp1[nums.length - 2], dp2[nums.length - 2]);
};
// @lc code=end
