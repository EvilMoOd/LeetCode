/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // return nums.indexOf(target);
  if (!nums || nums.length === 0) return -1;
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = (left + right) >> 1;
    if (nums[mid] === target) return mid;
    // 首先通过左右边界值和中点值确定中点以左或以右是一个确定的升序序列，那么就可以直接用正常的二分查找查找target，如果target不在该范围内则取不确定的另一个范围循环寻找
    if (nums[left] <= nums[mid]) {
      if (target >= nums[left] && target < nums[mid]) right = mid - 1;
      else left = mid + 1;
    } else {
      if (target <= nums[right] && target > nums[mid]) left = mid + 1;
      else right = mid - 1;
    }
  }
  return -1;
};
// @lc code=end
