/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  // 动态规划，长绳子由短绳子组成（后结果由前结果推得）
  let dp = [0, 0, 1];
  let max = 0;
  for (let i = 3; i <= n; i++) {
    max = 0;
    // 剪成两段相乘（直接乘和乘最大值），j段无需担心再分段的问题，因为j分段的情况已经包含在i段中了
    for (let j = 2; j <= i / 2; j++) {
      max = Math.max(max, Math.max(j * dp[i - j], j * (i - j)));
    }
    dp[i] = max;
  }
  return dp[n];
};
