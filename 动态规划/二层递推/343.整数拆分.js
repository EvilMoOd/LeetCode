/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  // 这道题用贪心和dp都非常经典，所以分别用两种方法实现了
  const dp = new Array(n + 1).fill(0);
  dp[2] = 1;
  for (let i = 3; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      dp[i] = Math.max(dp[i], dp[i - j] * j, (i - j) * j);
    }
  }
  return dp[n];
  // 这道题dp和贪心都可以，贪心更偏向数学问题的巧解，而dp更偏向问题本身的主旋律
  // 外层遍历是决定某个数，内层则是将某个数拆分成两个数，其中一个数的最大拆分积可以递归推出，直接相乘比较取最大值，然后取每次拆分时的最大值即可
};
// @lc code=end
