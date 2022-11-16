/*
 * @lc app=leetcode.cn id=377 lang=javascript
 *
 * [377] 组合总和 Ⅳ
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  let dp = Array(target + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i <= target; i++) {
    for (let j = 0; j < nums.length; j++)
      if (i >= nums[j]) dp[i] += dp[i - nums[j]];
  }

  return dp[target];
  // 与零钱兑换不同在于，该题需要排列，所以外层优先遍历背包，遍历背包可以包括排列出现的多种情况
};
// @lc code=end
