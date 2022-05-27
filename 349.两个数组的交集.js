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
  //表
  let map = new Map();
  let arr = []
  for (let i of nums1) {
    if (map.has(i)) {
      continue
    } else {
      map.set(i, 1)
    }
  }
  for (let j of nums2) {
    if (map.has(j) && !arr.includes(j)) {
      arr.push(j)
    }
  }
  return arr
};
// @lc code=end

