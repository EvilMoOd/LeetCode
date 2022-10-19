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
  // 动态规划，遍历nums数组的每个元素作为终点再二次遍历
  // 如果当前元素小于终点，说明该元素可以作为递增序列倒数第二个元素，在dp数组中表示该元素作为最后一个元素时的最长递增序列长度
  // 所以可以通过比较当前dp数组的终点元素(长度)和作为倒数第二个元素的dp数组元素+1的最大值来判断最长子序列
  const dp = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
  return Math.max(...dp);
};
// @lc code=end
