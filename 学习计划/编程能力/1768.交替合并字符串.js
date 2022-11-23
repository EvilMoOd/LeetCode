/*
 * @lc app=leetcode.cn id=1768 lang=javascript
 *
 * [1768] 交替合并字符串
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let res = '';
  let left = 0,
    right = 0;
  while (left < word1.length && right < word2.length) {
    res += word1[left] + word2[right];
    left++;
    right++;
  }
  if (left === word1.length) res += word2.slice(right);
  else res += word1.slice(left);
  return res;
};
// @lc code=end
