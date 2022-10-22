/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // 暴力有点耗时
  // for (let i = 0; i < k; i++) nums.unshift(nums.pop());
  // 裁剪字符串，批量轮转
  if (nums.length < k) k %= nums.length;
  nums.splice(0, 0, ...nums.splice(nums.length - k, k));
};
// @lc code=end
