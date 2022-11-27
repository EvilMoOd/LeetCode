/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    result <<= 1;
    if (n & 1) result += 1;
    n >>= 1;
  }
  return result >>> 0;//无符号右移（32位右移后左侧用0填充，非负）
};
// @lc code=end
