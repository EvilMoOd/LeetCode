/*
 * @lc app=leetcode.cn id=740 lang=javascript
 *
 * [740] 删除并获得点数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  // 跟打家劫舍问题一样，不过这题需要将数组转换成打家劫舍的数组形态
  if (!nums.length) return;
  const home = new Array(Math.max(...nums) + 1).fill(0);
  for (const i of nums) home[i] += i;
  const dp = [home[0], Math.max(home[0], home[1])];
  for (let i = 2; i < home.length; i++)
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + home[i]);
  return dp[home.length - 1];
};
// @lc code=end
