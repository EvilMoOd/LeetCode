/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  /* 
  背包问题：若问题可以将数据分为多组，每组的目的是尽量达到平均值，则视为背包问题
  初始化的数组下标表示背包容量
  外层循环为依次放入不同物品，内层循环为物品放入的背包后当前的背包重量
  max判断利用的动规特性，因为放入后背包剩余容量为：背包总容量-物品,而剩余容量即为另一个背包的总容量，由此可递推出背包的最大容量
  */
  // 动态规划，01背包问题，这里用一维滚动数组解题
  const sum = nums.reduce((a, b) => a + b);
  if (sum % 2 || nums.length === 1) return false;
  const half = sum / 2;
  const dp = new Array(half + 1).fill(0);
  // 遍历所有物品
  for (let i = 0; i < nums.length; i++) {
    // 倒叙遍历防止重复放入物品，遍历到物品值等于背包容量即可
    for (let j = half; j >= nums[i]; j--) {
      // 将当前放入背包容量物品与放入后背包容量的物品值相加，取最大值
      dp[j] = Math.max(dp[j], nums[i] + dp[j - nums[i]]);
    }
  }
  // 如果背包正好填满则返回true
  return dp[half] === half;
};
// @lc code=end
