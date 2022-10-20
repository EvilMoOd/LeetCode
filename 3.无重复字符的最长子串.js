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
  let left = 0;
  let max = 1;
  for (let right = 1; right < s.length; right++) {
    if (s.slice(left, right).includes(s[right])) {
      left++;
      right--;
    }
    max = Math.max(max, right - left + 1);
  }
  return max;
  // 移动窗口解题即可,注意当出现重复移动左指针时,右指针应固定不动
};
// @lc code=end