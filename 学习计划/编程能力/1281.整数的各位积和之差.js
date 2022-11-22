/*
 * @lc app=leetcode.cn id=1281 lang=javascript
 *
 * [1281] 整数的各位积和之差
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  let arr = n.toString().split('');
  let ji = arr.reduce((a, b) => a * b);
  let he = arr.reduce((a, b) => +a + +b);
  return ji - he;
};
// @lc code=end
