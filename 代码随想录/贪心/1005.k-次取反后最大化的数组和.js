/*
 * @lc app=leetcode.cn id=1005 lang=javascript
 *
 * [1005] K 次取反后最大化的数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  nums.sort((a, b) => Math.abs(b) - Math.abs(a));
  for (let i in nums) {
    if (k === 0) return sum();
    if (nums[i] < 0) {
      nums[i] = -nums[i];
      k--;
    } else {
      continue;
    }
  }
  while (k !== 0) {
    nums[nums.length - 1] = -nums[nums.length - 1];
    k--;
  }
  return sum();
  function sum() {
    let sum = 0;
    for (let i of nums) {
      sum += i;
    }
    return sum;
  }
};
// @lc code=end
