/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let dp = Array(nums.length).fill(1);
  let res = 1;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
    res = Math.max(res, dp[i]);
  }

  return res;
  // 二层递归，外层遍历序列元素，内层遍历比当前元素小的元素，在该元素已有的dp基础上+1，取最大值
};
// @lc code=end
