/*
 * @lc app=leetcode.cn id=1774 lang=javascript
 *
 * [1774] 最接近目标价格的甜点成本
 */

// @lc code=start
/**
 * @param {number[]} baseCosts
 * @param {number[]} toppingCosts
 * @param {number} target
 * @return {number}
 */
var closestCost = function (baseCosts, toppingCosts, target) {
  // 动态规划01背包问题。确定基料后进行背包填充
  const x = Math.min(...baseCosts);
  if (x >= target) return x; //如果最小基料大于target，直接返回
  const dp = new Array(target + 1).fill(0);
  let res = 2 * target - x;
  for (const b of baseCosts) {
    if (b <= target) dp[b] = true;
    else res = Math.min(res, b);
  }
  for (const t of toppingCosts) {
    for (let count = 0; count < 2; ++count) {
      for (let i = target; i > 0; --i) {
        if (dp[i] && i + t > target) res = Math.min(res, i + t);
        if (i - t > 0) dp[i] = dp[i] | dp[i - t];
      }
    }
  }
  for (let i = 0; i <= res - target; ++i) {
    if (dp[target - i]) return target - i;
  }
  return res;
};
// @lc code=end
