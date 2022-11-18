/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let res = [];
  let arr1 = Array(nums.length).fill(1);
  let arr2 = Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) arr1[i] = arr1[i - 1] * nums[i - 1];
  for (let i = nums.length - 2; i >= 0; i--)
    arr2[i] = arr2[i + 1] * nums[i + 1];
  for (let i = 0; i < nums.length; i++) res[i] = arr1[i] * arr2[i];
  return res;
};
// @lc code=end
