/*
 * @lc app=leetcode.cn id=474 lang=javascript
 *
 * [474] 一和零
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));
  for (let str of strs) {
    let zero = 0;
    let one = 0;
    for (let c of str) c === '0' ? zero++ : one++;
    for (let i = m; i >= zero; i--) {
      for (let j = n; j >= one; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - zero][j - one] + 1);
      }
    }
  }

  return dp[m][n];
  // 二维01背包典型题，这道题的物品是0和1，背包则是0和1的容量，以此建立二维背包数组
  // 然后往里塞东西，如果能够塞进去则物品+1，尽量往里塞，结果即为能放进去物品的最大值
};
// @lc code=end
