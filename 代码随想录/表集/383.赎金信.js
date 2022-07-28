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
  //表
  if (ransomNote.length > magazine.length) {
    return false;
  }
  let map = new Map();
  for (let char of magazine) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1)
    } else {
      map.set(char, 1)
    }
  };
  for (let char of ransomNote) {
    if (map.has(char) && map.get(char) != 0) {
      map.set(char, map.get(char) - 1)
    } else {
      return false
    }
  }
  return true
}
// @lc code=end

