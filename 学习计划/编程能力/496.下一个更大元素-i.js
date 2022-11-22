/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  // 暴力破解了，这题用单调栈比较合理
  const res = [];
  for (const i of nums1) {
    let index = nums2.indexOf(i);
      for (let j = index; j < nums2.length; j++) {
        if (nums2[j] > i) {
          res.push(nums2[j]);
          break;
        }
        if (j === nums2.length - 1 && nums2[j] <= i) res.push(-1);
      }
  }
  return res;
};
// @lc code=end
