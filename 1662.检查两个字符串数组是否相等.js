/*
 * @lc app=leetcode.cn id=1662 lang=javascript
 *
 * [1662] 检查两个字符串数组是否相等
 */

// @lc code=start
/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  return word1.join('') === word2.join('');
};
// @lc code=end
