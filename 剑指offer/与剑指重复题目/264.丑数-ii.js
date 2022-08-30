/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  // 动态规划
  let dp = [1];
  let p2 = 0,
    p3 = 0,
    p5 = 0;
  for (let i = 1; i < n; i++) {
    let n2 = dp[p2] * 2,
      n3 = dp[p3] * 3;
    n5 = dp[p5] * 5;
    dp[i] = Math.min(n2, n3, n5);
    dp[i] === n2 && p2++;
    dp[i] === n3 && p3++;
    dp[i] === n5 && p5++;
  }
  return dp[n - 1];
};
// @lc code=end
