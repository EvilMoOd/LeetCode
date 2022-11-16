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
  let dp = Array(amount + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) dp[j] += dp[j - coins[i]];
    console.log(dp);
  }

  return dp[amount];
  // 和494类似，区别在于，由于元素可以重复选取，所以该题在遍历背包时用的正序遍历
};
// @lc code=end
