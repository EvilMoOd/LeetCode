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
  /* const dp = Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++)
    if (nums[i] > nums[i - 1]) dp[i] = dp[i - 1] + 1;
  return Math.max(...dp); */
  // 贪心也可以，dp的话全部初始化1这一点一开始没想到，不过两种解法其实都差不多，dp相当于对连续的次数进行记录
  let res = 1,
    count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) count++;
    else count = 1;
    res = Math.max(res, count);
  }
  return res;
};
// @lc code=end
