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
  const sum = stones.reduce((previous, current) => previous + current, 0);
  const bag = Math.floor(sum / 2);
  const dp = Array(bag + 1).fill(0);
  for (let i = 0; i < stones.length; i++) {
    for (let j = dp.length; j >= stones[i]; j--)
      dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
  }
  return sum - 2 * dp[bag];
  // 尽量填充背包，最后用总和减去2个填充背包即为两堆石头碰撞后的剩余值
};
// @lc code=end
