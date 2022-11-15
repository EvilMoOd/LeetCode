/*
 * @lc app=leetcode.cn id=1035 lang=javascript
 *
 * [1035] 不相交的线
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function (nums1, nums2) {
  const dp = Array.from(Array(nums1.length + 1), () =>
    Array(nums2.length + 1).fill(0)
  );
  for (let i = 1; i <= nums1.length; i++) {
    for (let j = 1; j <= nums2.length; j++) {
      if (nums1[i - 1] === nums2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[nums1.length][nums2.length];
  // 1143题类似，做完那题做这题就没有压力
  // 本质上也是一个非连续的子序列（因为限制为不相交的线）
};
// @lc code=end
