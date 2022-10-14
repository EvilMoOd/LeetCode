/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // 动态规划，规划出偷或不偷两种情况的最大值即可
  // 考虑到[2,1,1,2]这种数组所以不能单纯进行奇偶位累加（五项的话不用考虑，因为五项最优解肯定是偷135或者24或者又转换成新的四项）
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  const dp = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < nums.length; i++) {
    //偷则累加，不偷则对最大值做继承
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }
  return dp[nums.length - 1];
};
// @lc code=end
