/*
 * @lc app=leetcode.cn id=1049 lang=javascript
 *
 * [1049] 最后一块石头的重量 II
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
  // 动态规划背包问题，将石头分为两组，尽可能使两组的总差值最小
  const sum = stones.reduce((a, b) => a + b);
  const half = Math.floor(sum / 2);
  const dp = new Array(half + 1).fill(0);

  for (let i = 0; i < stones.length; i++) {
    for (let j = half; j >= stones[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
    }
  }

  return sum - 2 * dp[half];
};
// @lc code=end
