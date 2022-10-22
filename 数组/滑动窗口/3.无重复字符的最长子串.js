/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s.length) return 0;
  let left = 0,
    right = 1;
  let max = 1;
  while (right < s.length) {
    if (s.slice(left, right).includes(s[right])) left++;
    else right++;
    max = Math.max(max, right - left);
  }
  return max;
  // 移动窗口解题即可,注意当出现重复移动左指针时,右指针应固定不动
};
// @lc code=end
