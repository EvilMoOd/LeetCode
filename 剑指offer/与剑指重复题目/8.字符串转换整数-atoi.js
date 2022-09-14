/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  //去空格，正则
  const Min = -Math.pow(2, 31);
  const Max = Math.pow(2, 31) - 1;
  const result = parseInt(s.trim()) || 0;
  return result < Min ? Min : result > Max ? Max : result;
};
// @lc code=end
