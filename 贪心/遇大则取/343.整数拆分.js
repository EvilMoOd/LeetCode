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
  if (n < 4) return n - 1;
  if (n === 4) return 4;
  let s = 0;
  while (n > 4) {
    n -= 3;
    s++;
  }
  return n * 3 ** s;
  // 这道题dp和贪心都可以，贪心更偏向数学问题的巧解，而dp更偏向问题本身的主旋律
};
// @lc code=end
