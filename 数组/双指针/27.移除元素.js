/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let left = 0;
  for (let right = 0; right < nums.length; right++)
    if (nums[right] !== val) nums[left++] = nums[right];
  return left;
  // 双指针原地数组变化，移动右指针，把非移除元素填充前面左指针指向元素即可
};
// @lc code=end
