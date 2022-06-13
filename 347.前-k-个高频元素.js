/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = new Map();
  for (const i of nums) {
    map.set(i, (map.get(i) || 0) + 1);
  }
  const arr = [...map].sort((a, b) => b[1] - a[1]);
  const result = [];
  for (let i = 0; i < k; i++) {
    result.push(arr[i][0]);
  }
  return result;
};
// @lc code=end
