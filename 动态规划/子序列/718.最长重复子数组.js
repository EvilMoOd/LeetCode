/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  let res = 0;
  const dp = Array.from(Array(nums1.length + 1), () =>
    Array(nums2.length + 1).fill(0)
  );
  for (let i = 1; i <= nums1.length; i++) {
    for (let j = 1; j <= nums2.length; j++) {
      if (nums1[i - 1] === nums2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      res = Math.max(res, dp[i][j]);
    }
  }
  return res;
  // 与1143类似，区别在于该题要求连续，所以不继承非连续的时的最大值，结果需要手动记录dp中的最大值
};
// @lc code=end
