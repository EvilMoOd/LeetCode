/*
 * @lc app=leetcode.cn id=377 lang=javascript
 *
 * [377] 组合总和 Ⅳ
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  // 动态规划完全背包，同样是求背包中装物品方法数（排列数）
  // 定义好不同容量的背包，然后遍历物品挨个装入，装入后剩余容量与可以由dp数组前项得出，进行累加即可得到i背包容量时能装的物品方法数
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  // 该题要求排列而非组合，所以采用外背包内物品，小到大遍历
  for (let i = 1; i <= target; i++) {
    for (let j = 0; j < nums.length; j++) {
      // 背包容量够当前物品重量时，累加
      if (i >= nums[j]) dp[i] += dp[i - nums[j]];
    }
  }
  return dp[target];
};
// @lc code=end
