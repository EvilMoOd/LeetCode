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
  let res = 0;
  let range = 0,
    farthest = 0;
    // 这里遍历到倒数第二个即可
  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, nums[i] + i);
    if (range === i) {
      range = farthest;
      res++;
    }
  }
  return res;
  // 贪心，遍历数组，记录当前格子能跳到的格子范围，该范围内更新每个格子能跳到的最远格子,取能跳最远的格子作为新的跳跃范围直到跳到结尾
};
// @lc code=end
