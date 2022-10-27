/*
 * @lc app=leetcode.cn id=371 lang=javascript
 *
 * [371] 两整数之和
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  return a === 0 ? b : getSum((a & b) << 1, a ^ b);
  // 位运算加法，相同的位相加左移进位再加上不同的位，也就是异位不变，同位进位
};
// @lc code=end