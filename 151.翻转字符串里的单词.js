/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  //暴力解法，字符串正则后转数组reverse再转回来
  return s
    .match(/\b\w+\b/g)
    .reverse()
    .join(' ');
};
// @lc code=end
