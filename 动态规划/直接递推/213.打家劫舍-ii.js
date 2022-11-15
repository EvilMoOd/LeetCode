/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length <= 2) return Math.max(...nums);
  const nums1 = nums.slice(0, nums.length - 1),
    nums2 = nums.slice(1);
  const dp1 = [nums1[0], Math.max(nums1[0], nums1[1])];
  for (let i = 2; i < nums1.length; i++)
    dp1[i] = Math.max(nums1[i] + dp1[i - 2], dp1[i - 1]);
  const dp2 = [nums2[0], Math.max(nums2[0], nums2[1])];
  for (let i = 2; i < nums2.length; i++)
    dp2[i] = Math.max(nums2[i] + dp2[i - 2], dp2[i - 1]);
  return Math.max(dp1[dp1.length - 1], dp2[dp2.length - 1]);
  // 与打家劫舍1不同的是，我们需要分别去头和去尾，比较两种情况下哪个偷的钱多
};
// @lc code=end
