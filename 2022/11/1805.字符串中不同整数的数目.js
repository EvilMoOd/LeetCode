/*
 * @lc app=leetcode.cn id=1805 lang=javascript
 *
 * [1805] 字符串中不同整数的数目
 */

// @lc code=start
/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
  return new Set(word.match(/\d+/g)?.map((item) => BigInt(item))).size;
};
// @lc code=end
