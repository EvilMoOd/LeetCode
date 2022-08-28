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
  // O(n2)暴力解法超时，尝试用O(n)贪心，当然还有另一种改变原数组的动态规划解法，但是跟贪心一样都是遇到负反馈清零
  // 一直循环不断累加并且更新累加中的最大值，一旦累加sun是负数，说明此时再往后加正数时会有负反馈，应该清零后在继续累加
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
