/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  // 动态规划完全背包，这道题与>目标和<类似，都是求累加方法数(组合数)
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1; //兑换0元只有一种方法，不换
  // 题目需要求组合数，这里先遍历物品，再遍历背包容量
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] += dp[j - coins[i]];
    }
  }
  return dp[amount];
};
// @lc code=end
