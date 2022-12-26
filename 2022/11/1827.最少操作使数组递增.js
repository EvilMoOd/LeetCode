/*
 * @lc app=leetcode.cn id=1827 lang=javascript
 *
 * [1827] 最少操作使数组递增
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  if (nums.length < 2) return 0;
  let res = 0;
  for (let i = 1; i < nums.length; i++) {
    while (nums[i] <= nums[i - 1]) {
      res++;
      nums[i]++;
    }
  }
  return res;
};
// @lc code=end
