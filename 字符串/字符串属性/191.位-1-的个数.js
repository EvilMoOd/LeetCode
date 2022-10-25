/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let s = n.toString(2);
  let res = 0;
  for (const i of s) {
    if (i === '1') res++;
  }
  return res;
  // 统计个数。。。输入是一个十进制，转二进制之后循环计数输出，水题
};
// @lc code=end
