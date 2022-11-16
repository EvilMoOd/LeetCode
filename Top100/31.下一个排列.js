/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let i = nums.length - 2;
  // 找到第一个上升段的左值
  while (i >= 0 && nums[i] >= nums[i + 1]) i--;
  if (i >= 0) {
    let j = nums.length - 1;
    // 找到第一个大于该左值的点并互换其值
    while (j >= 0 && nums[i] >= nums[j]) j--;
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  // 然后将该右值逆置（降序变升序），因为这里要取大
  let l = i + 1,
    r = nums.length - 1;
  while (l < r) {
    [nums[l], nums[r]] = [nums[r], nums[l]];
    l++, r--;
  }
};
// @lc code=end
