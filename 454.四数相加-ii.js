/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  //用map记录遍历一遍n1和n2，然后在遍历一遍n3，n4去比较
  const map = new Map();
  let count = 0;
  for (let n1 of nums1) {
    for (let n2 of nums2) {
      const sum = n1 + n2;
      map.set(sum, (map.get(sum) || 0) + 1);
    }
  }
  for (let n3 of nums3) {
    for (let n4 of nums4) {
      const sum = n3 + n4;
      count += map.get(0 - sum) || 0;
    }
  }
  return count;
};
// @lc code=end
