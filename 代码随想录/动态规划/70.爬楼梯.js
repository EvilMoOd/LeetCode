/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let dp = [];
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }
  return dp[n];

  // 本题也是一个完全背包题
  /* const bag = new Array(n + 1).fill(0);
  bag[0] = 1;
  for (let i = 1; i <= n; i++) {
    // 该题物品数是2
    for (let j = 1; j <= 2; j++) {
      if (i >= j) bag[i] += bag[i - j];
    }
  }
  return bag[n]; */
};
// @lc code=end
