/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  // 位运算，转换成ASCII码之后位运算即可
  let ret = 0;
  for (const ch of s) ret ^= ch.charCodeAt();
  for (const ch of t) ret ^= ch.charCodeAt();
  return String.fromCharCode(ret);
};
// @lc code=end
