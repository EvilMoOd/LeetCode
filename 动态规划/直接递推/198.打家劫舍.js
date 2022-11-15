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
  if (nums.length === 1) return nums[0];
  const dp = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }
  return dp[nums.length - 1];
  // 动态规划取的偷盗中的最大值，所以判断时只需要判断偷或不偷即可
  // 如果偷的数额不如前一个已偷的钱，则不偷继承前一个数值，以便于后序递推
  /* 
  对于打家劫舍来说，偷取的范围一般是在4个房子中抉择（5个以上的情况肯定可以缩成4个），
  而因为第一个房子的情况已经包含在第三个中，所以递推时只需要取当前偷该房子或上一次偷的最大值（不偷）即可，如果偷了当前房子的钱不如前一次偷盗的话，那么还不如不偷将偷盗次数留给未来
  */
};
// @lc code=end
