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
  // 补位法
  // 一位数的假想序列长度为10，二位数的假想序列为200（000102...9899），三位数3000以此类推，所以假想序列的长度为 i*10^i
  // 而实际的 n 应该落在这个假想序列的范围内。当 i*10^i < n 时，我们需要新增数位操作，来满足条件。
  let i = 1;

  while (i * Math.pow(10, i) < n) {
    // 新增数位导致 n 向后移
    n += Math.pow(10, i);
    i++;
  }
  // 得出隔间数字，并转为字符
  const partition = Math.floor(n / i) + '';
  return partition.charAt(n % i);
};
// @lc code=end
