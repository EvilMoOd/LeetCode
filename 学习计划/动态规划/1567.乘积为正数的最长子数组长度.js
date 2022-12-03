/*
 * @lc app=leetcode.cn id=1567 lang=javascript
 *
 * [1567] 乘积为正数的最长子数组长度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function (nums) {
  // 与152题目同，但这题不求值求子数组的长度
  // 动态规划维护正负两个数组，数组统计当前位前正负值数量，遇到0则断，max记录正数组最大值
  let positive = [],
  negative = [];
  positive[0] = nums[0] > 0 ? 1 : 0;
  negative[0] = nums[0] < 0 ? 1 : 0;
  let max = positive[0];
  
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > 0) {
      // 当前元素为正。正数组累加，负数组继承之前的负数个数
      positive[i] = positive[i - 1] + 1;
      negative[i] = negative[i - 1] > 0 ? negative[i - 1] + 1 : 0;
    } else if (nums[i] < 0) {
      // 当前为负数，则正负数组数值颠倒后进行累加
      negative[i] = positive[i - 1] + 1;
      positive[i] = negative[i - 1] > 0 ? negative[i - 1] + 1 : 0;
    } else {
      positive[i] = 0;
      negative[i] = 0;
    }
    max = Math.max(max, positive[i]);
  }
  return max;
};
// @lc code=end
