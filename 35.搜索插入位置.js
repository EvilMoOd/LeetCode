/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (target <= nums[0]) return 0;
  if (target > nums[nums.length - 1]) return nums.length;
  let left = 0,
    right = nums.length - 1;
  while (right - left > 1) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] >= target) right = mid;
    else if (nums[mid] < target) left = mid;
  }
  return right;
};
// @lc code=end
