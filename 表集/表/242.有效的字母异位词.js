/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const map = new Map();
  for (const i of s) map.set(i, map.has(i) ? map.get(i) + 1 : 1);
  for (const i of t) {
    if (!map.get(i)) return false;
    else map.set(i, map.get(i) - 1);
  }
  return Math.max(...map.values()) === 0;
  // 异位词，map
};
// @lc code=end
