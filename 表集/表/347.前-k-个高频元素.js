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
  // 建表
  const map = new Map();
  for (const i of nums) map.set(i, map.has(i) ? map.get(i) + 1 : 1);
  // 排序
  let arr = [...map.entries()];
  arr.sort((a, b) => b[1] - a[1]);
  // 返回前k个高频元素
  const res = [];
  for (let i = 0; i < k; i++) {
    res.push(arr[i][0]);
  }
  return res;
  // 表+排序，优先队列看不太懂
};
// @lc code=end
