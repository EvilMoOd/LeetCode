/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let left = 0,
    right = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[right]) nums[++left] = nums[right];
    right++;
  }
  return left;
  // 能过但是代码过于冗长，而且双指针也没有好利用到
  // 本题主要在于移动右指针与左指针比较，如果不同，则将左指针+1并赋值当前右指针的值，得到一个前left个元素升序的数组
  // 简单的说，移动右指针把非重复元素填充左指针指向元素即可
};
// @lc code=end
