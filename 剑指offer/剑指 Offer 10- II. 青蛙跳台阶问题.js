/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  let dp = [1, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % (1e9 + 7);
  }
  return dp[n];
};

console.log(
  1000000008 % (1e9 + 7),
  '🚀DEBUG变量>>>1000000008<<<在剑指 Offer 10- II. 青蛙跳台阶问题的第13行🚀'
);
