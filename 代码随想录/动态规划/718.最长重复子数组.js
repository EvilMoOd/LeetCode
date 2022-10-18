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
  // 动态规划，二维dp，i表示A下标，j表示B下标
  // 假设有元素相同时，两者需要同时向右走一位比较,所以就是dp[i,j]=dp[i-1,j-1]+1
  let res = 0;
  const dp = Array.from(Array(nums1.length + 1), () =>
    Array(nums2.length + 1).fill(0)
  );
  for (let i = 1; i <= nums1.length; i++) {
    for (let j = 1; j <= nums2.length; j++) {
      if (nums1[i - 1] === nums2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      res = dp[i][j] > res ? dp[i][j] : res;
    }
  }
  return res;
};
// @lc code=end
