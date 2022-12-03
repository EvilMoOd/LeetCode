/*
 * @lc app=leetcode.cn id=918 lang=javascript
 *
 * [918] 环形子数组的最大和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  // 和53题区别在于有环，不能贪心，Kanade式动态规划，维护5个变量，最大最小值，dp最大最小值和数组元素和
  // 如果和等于最小值，说明元素呈现单调关系，直接取最大值即可，
  // 否则比较最大值与sum-min，取二者最大
  let min = Infinity,
    max = -Infinity,
    sum = 0;
  let minCur, maxCur;
  for (let i = 0; i < nums.length; i++) {
    minCur = i === 0 ? nums[0] : Math.min(nums[i], minCur + nums[i]);
    maxCur = i === 0 ? nums[0] : Math.max(nums[i], maxCur + nums[i]);
    sum += nums[i];
    min = Math.min(min, minCur);
    max = Math.max(max, maxCur);
  }
  return sum === min ? max : Math.max(max, sum - min);
};
// @lc code=end