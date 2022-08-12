/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  return Math.min(...nums);
  // 二分法
  let left = 0,
    right = numbers.length - 1;
  while (left < right) {
    let middle = left + ~~((right - left) / 2);
    if (numbers[middle] > numbers[right]) left = middle + 1;
    else if (numbers[middle] < numbers[right]) right = middle;
    else right--;
  }
  return numbers[left];
};
// @lc code=end
