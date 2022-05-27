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
  //排序后建表
  let map = new Map, k
  for (let i = 0; i < strs.length; i++)
    map.has(k = strs[i].split('').sort().join('')) ? map.get(k).push(strs[i]) : map.set(k, [strs[i]])
  return Array.from(map.values())
};
// @lc code=end

