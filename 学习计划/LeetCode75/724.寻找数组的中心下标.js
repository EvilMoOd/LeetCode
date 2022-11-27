/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  // 双指针
  let left = 0,
    right = 0;
  for (let i = nums.length - 1; i > 0; i--) right += nums[i];
  for (let i = 0; i < nums.length; i++) {
    if (left === right) return i;
    left += nums[i];
    right -= nums[i + 1];
  }
  return -1;
};
// @lc code=end
