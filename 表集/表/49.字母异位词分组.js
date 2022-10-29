/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();
  for (const i of strs) {
    let key = i.split('').sort().join('');
    map.has(key) ? map.set(key, map.get(key).concat(i)) : map.set(key, [i]);
  }
  return [...map.values()];
  // 建表，排序之后查表
};
// @lc code=end
