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
  const dp = [1, 1];
  let i2 = 1,
    i3 = 1,
    i5 = 1;
  for (let i = 2; i <= n; i++) {
    let a = dp[i2] * 2,
      b = dp[i3] * 3,
      c = dp[i5] * 5;
    let min = Math.min(a, b, c);
    if (min === a) i2++;
    if (min === b) i3++;
    if (min === c) i5++;
    dp[i] = min;
  }
  return dp[n];
  // 动态规划，不断累积递推出三个数*x次后的数组
};
// @lc code=end
