/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  // 位运算异或然后统计1个数
  return (x ^ y).toString(2).split('0').join('').length;
};
// @lc code=end