/*
 * @lc app=leetcode.cn id=692 lang=javascript
 *
 * [692] 前K个高频单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const map = new Map();
  for (const i of words) map.set(i, map.get(i) ? map.get(i) + 1 : 1);
  const arr = Array.from(map.entries());
  arr.sort((a, b) => (b[1] === a[1] ? a[0].localeCompare(b[0]) : b[1] - a[1]));
  return arr.slice(0, k).map((i) => i[0]);
};
// @lc code=end
