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
  let res = 0;
  const map = new Map();
  for (const i of nums1) {
    for (const j of nums2) {
      map.has(i + j) ? map.set(i + j, map.get(i + j) + 1) : map.set(i + j, 1);
    }
  }
  for (const i of nums3) {
    for (const j of nums4) {
      map.has(-(i + j)) && (res += map.get(-(i + j)));
    }
  }
  return res;
  // 暴力解法需要O(n^4)，map进行空间换时间，降成类似两数之和题就简单了
  // 记录前两个数组的和，再用后两个数组的和相减后的结果判断表中元素
  // 这题不需要去重，而且同个和也有多种搭配，所以需要建表时要计数
};
// @lc code=end
