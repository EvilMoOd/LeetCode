/*
 * @lc app=leetcode.cn id=1790 lang=javascript
 *
 * [1790] 仅执行一次字符串交换能否使两个字符串相等
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  if (s1 === s2) return true;
  let str1 = '',
    str2 = '';
  let left = 0,
    right = 0;
  while (left < s1.length) {
    if (s1[left] !== s2[right]) {
      str1 += s1[left];
      str2 += s2[left];
    }
    left++;
    right++;
  }
  if (str1.length !== 2) return false;
  return str1.split('').reverse('').join('') === str2;
};
// @lc code=end
