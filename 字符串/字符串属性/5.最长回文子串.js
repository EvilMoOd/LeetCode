/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let res = s.slice(0, 1); //s长度小于2或者回文串长度1时，初始化有效
  let max = 1;
  for (let i = 0; i < s.length; i++) {
    let left = i,
      right = i;
    while (left !== -1 && right !== s.length && s[left] === s[right]) {
      if (right - left + 1 > max) {
        res = s.slice(left, right + 1);
        max = right - left + 1;
      }
      left--;
      right++;
    }
    left = i;
    right = i + 1;
    while (left !== -1 && right !== s.length && s[left] === s[right]) {
      if (right - left + 1 > max) {
        res = s.slice(left, right + 1);
        max = right - left + 1;
      }
      left--;
      right++;
    }
  }
  return res;
  // 中心扩散法，
};
// @lc code=end
