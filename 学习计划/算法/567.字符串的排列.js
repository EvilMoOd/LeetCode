/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  // 和438题字母异位词解法一致，双map，统计map中匹配的条数，达到size则判true
  const map = new Map();
  for (const i of s1) map.set(i, map.get(i) ? map.get(i) + 1 : 1);
  let left = 0,
    right = 0;
  const window = new Map();
  let valid = 0;
  while (right < s2.length) {
    window.set(
      s2[right],
      window.get(s2[right]) ? window.get(s2[right]) + 1 : 1
    );
    if (map.get(s2[right]) === window.get(s2[right])) valid++;
    right++;
    if (right - left > s1.length) {
      if (map.get(s2[left]) === window.get(s2[left])) valid--;
      window.set(s2[left], window.get(s2[left]) - 1);
      left++;
    }
    if (right - left === s1.length && valid === map.size) return true;
  }
  return false;
};
// @lc code=end
