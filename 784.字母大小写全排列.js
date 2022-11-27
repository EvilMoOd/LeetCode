/*
 * @lc app=leetcode.cn id=784 lang=javascript
 *
 * [784] 字母大小写全排列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  return [...s]
    .map((c) => (/\d/.test(c) ? [c] : [c.toLowerCase(), c.toUpperCase()]))
    .reduce((p, c) => p.map((v) => c.map((b) => v + b)).flat(), ['']);
};
// @lc code=end
