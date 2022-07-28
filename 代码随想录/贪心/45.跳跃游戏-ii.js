/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let step = 0,
    longest = 0,
    end = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    longest = Math.max(longest, nums[i] + i);
    if (end === i) {
      step++;
      end = longest;
    }
  }
  return step;
};
// @lc code=end
