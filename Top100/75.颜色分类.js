/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  // 用双指针解决0、1、2的排序，左指针记录1的最左位置，右指针记录2的最左位置
  let left = 0;
  let right = 0;
  //遍历到0则与左指针做交换，同时注意交换后要再跟右指针做一次交换把2换到后面去（如果当前有2的话），遍历到1则直接与右指针做交换
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      [nums[i], nums[right]] = [nums[right], nums[i]];
      right++;
    } else if (nums[i] === 0) {
      [nums[i], nums[left]] = [nums[left], nums[i]];
      if (left < right) [nums[i], nums[right]] = [nums[right], nums[i]];
      left++;
      right++;
    }
  }
};
// @lc code=end
