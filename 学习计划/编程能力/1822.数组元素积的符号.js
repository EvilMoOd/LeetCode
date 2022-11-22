/*
 * @lc app=leetcode.cn id=1822 lang=javascript
 *
 * [1822] 数组元素积的符号
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let sum = nums.reduce((a, b) => a * b);
  return sum > 0 ? 1 : sum < 0 ? -1 : 0;
};
// @lc code=end
