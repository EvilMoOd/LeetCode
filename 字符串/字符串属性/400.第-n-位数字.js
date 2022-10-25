/*
 * @lc app=leetcode.cn id=400 lang=javascript
 *
 * [400] 第 N 位数字
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
  let len = 1,
    base = 9;
  while (n > base * len) {
    n -= base * len;
    len++;
    base *= 10;
  }
  let i = --n % len;
  let num = 10 ** (len - 1) + Math.floor(n / len) + '';
  return +num[i];
  // 按长度统计可知，长度为x的字符有9*10**（x-1）个
  // 将n不断缩减到指定范围后确定落在哪个数字以及该数字上的第几个字符即可
};
// @lc code=end
