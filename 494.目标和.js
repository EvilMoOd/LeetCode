/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  // 动态规划背包问题，将其分为两组数据，这两组数据之和相减=target即可，所以背包容量为(sum+target)/2
  const sum = nums.reduce((a, b) => a + b);
  if ((sum + target) % 2 || Math.abs(target) > sum) return 0;
  const half = (sum + target) / 2;
  const dp = new Array(half + 1).fill(0);
  //背包为0只有一种装法，不装
  dp[0] = 1;
  // 对每个不同重量的背包装，下标表示能装的方法数，累加装之前的背包方法数加上装之后的方法数，最后得到刚好为half背包大小的方法数
  for (let i = 0; i < nums.length; i++) {
    for (let j = half; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]];
    }
  }

  return dp[half];
};
// @lc code=end
