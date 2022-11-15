/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    let left = i,
      right = i;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      res++;
      left--;
      right++;
    }
    left = i;
    right = i + 1;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      res++;
      left--;
      right++;
    }
  }
  return res;
};
// @lc code=end
