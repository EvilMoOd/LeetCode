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
  // O(n2)暴力解法超时，尝试用O(n)贪心
  let max = -Infinity;
  let sum = 0;
  // 相加后变负数则表示负反馈，应跳过该点，继续遍历并重新记录
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    max = Math.max(max, sum);
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
};
// @lc code=end
