/*
 * @lc app=leetcode.cn id=1046 lang=javascript
 *
 * [1046] 最后一块石头的重量
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  // 这道题解法很多样，最暴力则是排序模拟
  while (stones.length !== 1)
    stones.push(stones.sort((a, b) => a - b).pop() - stones.pop());
  return stones[0];
};
// @lc code=end
