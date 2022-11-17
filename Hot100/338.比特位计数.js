/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  // 转二进制统计1个数
  let res = [];
  for (let i = 0; i <= n; i++)
    res.push(i.toString(2).split('0').join('').length);
  return res;
};
// @lc code=end
