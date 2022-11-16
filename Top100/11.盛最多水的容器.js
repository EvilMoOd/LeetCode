/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // 暴力O（n2）超时了，用双指针O（n）遍历一次即可
  // 初始取底边最宽，然后逐渐往中间缩小，那边高度低就缩哪边，取面积最大值
  let res = 0;
  let left = 0,
    right = height.length - 1;
  while (left < right) {
    res = Math.max(res, Math.min(height[left], height[right]) * (right - left));
    height[left] <= height[right] ? left++ : right--;
  }
  return res;
};
// @lc code=end
