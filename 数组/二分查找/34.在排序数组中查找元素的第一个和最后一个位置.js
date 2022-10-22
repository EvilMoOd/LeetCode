/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right && (nums[left] !== target || nums[right] !== target)) {
    let mid = Math.floor((right + left) / 2);
    if (nums[mid] < target) left = mid + 1;
    else if (nums[mid] > target) right = mid - 1;
    else {
      if (nums[left] !== target) left++;
      if (nums[right] !== target) right--;
    }
  }
  return left <= right ? [left, right] : [-1, -1];
  // 与一刷的时候思路差不多，不同的是一刷分别找的左右边界，这次直接一次循环
  // mid如果非target，则缩边。如果是target则查看左右边界值是否是target，是的话说明找到边界了，不是的话就缩1
  // 如果不存在target的话，左右边界会一直缩，缩到左右互换，此时跳出循环直接返回不存在即可
};
// @lc code=end
