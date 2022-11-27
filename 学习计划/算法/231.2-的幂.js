/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  // 可以被2开方的数在二进制中表示则只有1位是1，根据此特性可以用取反+与 或 -1+与 来判断
  // 设n在第n位是1，那么取反后n及其左边全部置1，左边位置全部置0（取反+1），与运算可以得到n
  // 也可以-1之后，n位左边全部置1，n位置0，与运算后判断是否=0即可
  return n > 0 && (n & -n) === n;
  // return n > 0 && (n & (n - 1)) === 0;
};
// @lc code=end
