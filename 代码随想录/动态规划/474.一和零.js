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
  // 动态规划背包问题背包大小是m和n，物品的中量是str元素的1和0
  // let dp = new Array(m + 1).fill(new Array(n + 1).fill(0)); 不能这样初始化数组，会导致一维数组中都是同一个二维数组的堆空间
  const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));
  for (let s of strs) {
    let zero = 0,
      one = 0;
    for (const c of s) {
      if (c === '0') zero++;
      else one++;
    }
    for (let i = m; i >= zero; i--) {
      for (let j = n; j >= one; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - zero][j - one] + 1);
      }
    }
  }
  return dp[m][n];
};
// @lc code=end