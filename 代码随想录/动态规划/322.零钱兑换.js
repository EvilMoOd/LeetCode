/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  // 动态规划背包问题，该题与之前不同在于，该题侧重于选取组合中最小的物品数
  // 先遍历物品，依次放入各个容量背包，放入的个数受之前影响，取放入前和1（当前物品）+放入后剩余容量（动规数组前项），取最小值
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  // 先遍历物品再遍历背包
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j]);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};
// @lc code=end
