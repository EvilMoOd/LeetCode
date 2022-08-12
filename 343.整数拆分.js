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
  // 动态规划，长绳子由短绳子组成（后结果由前结果推得）
  /* let dp = [0, 0, 1];
  let max = 0;
  for (let i = 3; i <= n; i++) {
    max = 0;
    // 剪成两段相乘（直接乘和乘最大值），j段无需担心再分段的问题，因为j分段的情况已经包含在i段中了
    for (let j = 1; j <= i / 2; j++) {
      max = Math.max(max, Math.max(j * dp[i - j], j * (i - j)));
    }
    dp[i] = max;
  }
  return dp[n]; */
  /* 贪心，动规解一遍之后可以发现，j段绳子在长度达到5以上的时候，可以进行拆分，拆分成更更小的绳子以得到更大的乘积，
  因此，可以用贪心，使绳子尽可能多的保持长度为3 */
  if (n < 4) return n - 1;
  let res = 1;
  // 从5以上开始贪心
  while (n > 4) {
    res *= 3;
    n -= 3;
  }
  // 记得乘最后余下来的n，顺便可以把n=4情况归纳进去
  return res * n;
};
// @lc code=end
