/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const res = [];
  const map = new Map();
  for (const i of nums1)
    map.has(i) ? map.set(i, map.get(i) + 1) : map.set(i, 1);
  for (const i of nums2)
    map.get(i) && res.push(i) && map.set(i, map.get(i) - 1);
  return res;
  // map入门题
};
// @lc code=end
