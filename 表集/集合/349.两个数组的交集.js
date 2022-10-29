/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const set = new Set(nums1);
  const res = new Set();
  for (const i of nums2) set.has(i) && !res.has(i) && res.add(i);
  return [...res];
  // set入门题
};
// @lc code=end
