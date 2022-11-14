/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length === 1) return true;
  let far = 0;
  for (let i = 0; i <= far; i++) {
    far = Math.max(far, nums[i] + i);
    if (far >= nums.length - 1) return true;
  }
  return false;
  // 不断更新能跳到的最远下标，如果一直遍历到结尾则true，否则false
};
// @lc code=end
