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
  //以首个跳出距离之前，挨个跳一遍，每次比较最远距离，看最终最远距离是否到达最后一个下标
  if (nums.length === 1) return true;
  let far = 0;
  for (let i = 0; i <= far; i++) {
    far = Math.max(far, i + nums[i]);
    if (far >= nums.length - 1) return true;
  }
  return false;
};
// @lc code=end
