/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const map = new Map();
  for (const i of p) map.set(i, map.get(i) ? map.get(i) + 1 : 1);

  const res = [];
  const window = new Map();
  let left = 0,
    right = 0;
  let valid = 0;
  while (right < s.length) {
    // 右移
    window.set(s[right], window.get(s[right]) ? window.get(s[right]) + 1 : 1);
    if (map.get(s[right]) === window.get(s[right])) valid++;
    right++;
    // 左移
    if (right - left > p.length) {
      if (map.get(s[left]) === window.get(s[left])) valid--;
      window.set(s[left], window.get(s[left]) - 1);
      left++;
    }
    if (valid === map.size) res.push(left);
  }
  return res
};
// @lc code=end

