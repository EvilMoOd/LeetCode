/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  // 快慢指针，与环形链表解题解法一致，
  let slow = nums[0];
  let fast = nums[slow];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }
  slow = 0;
  while (nums[fast] !== nums[slow]) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return nums[slow];
};
// @lc code=end
