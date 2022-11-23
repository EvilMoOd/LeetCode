/*
 * @lc app=leetcode.cn id=1672 lang=javascript
 *
 * [1672] 最富有客户的资产总量
 */

// @lc code=start
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealthconst = function (accounts) {
  // 暴力解决
  let res = 0;
  for (const i of accounts) {
  let sum = i.reduce((a, b) => a + b);
  res = Math.max(res, sum);
  }
  return res;
};
// @lc code=end
