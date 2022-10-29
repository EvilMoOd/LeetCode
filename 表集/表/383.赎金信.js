/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const map = new Map();
  for (const i of magazine)
    map.get(i) ? map.set(i, map.get(i) + 1) : map.set(i, 1);
  for (const i of ransomNote) {
    if (map.get(i)) map.set(i, map.get(i) - 1);
    else return false;
  }
  return true;
  // map题，没什么好说的
};
// @lc code=end
