/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const sum = nums.reduce((p, v) => p + v);
  if (sum & 1) return false;
  const dp = Array(sum / 2 + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    for (let j = sum / 2; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
      if (dp[j] === sum / 2) return true; //如果已经出现可以提前结束
    }
  }
  return dp[sum / 2] === sum / 2;
  // 01背包入门题，用dp数组当作背包逆序填充，如果最后刚好填满则符合条件
};
// @lc code=end
