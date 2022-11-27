/*
 * @lc app=leetcode.cn id=424 lang=javascript
 *
 * [424] 替换后的最长重复字符
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  // 用map统计目前窗口内出现最多的字符max，窗口的容量则是max+k，当窗口容量溢出，则移动左边窗缩小窗口，最后返回该窗口大小即可
  // 窗口代表一段连续的字符（可以填补k次断掉连续的字符），最后返回的窗口则是连续次数出现最多的一段字符
  let map = new Map();
  let left = 0;
  let max = 0;
  for (let right = 0; right < s.length; right++) {
    map.set(s[right], map.get(s[right]) ? map.get(s[right]) + 1 : 1);
    max = Math.max(max, map.get(s[right]));
    if (right - left + 1 > max + k) {
      // 移动左边
      map.set(s[left], map.get(s[left]) - 1);
      left++;
    }
  }
  return s.length - left;
};
// @lc code=end
