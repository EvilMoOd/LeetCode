/*
 * @lc app=leetcode.cn id=413 lang=javascript
 *
 * [413] 等差数列划分
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
  // 直接用差统计等差数列元素个数然后计算即可
  let res = 0;
  let cha = Infinity,
    count = 2;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === cha) count++;
    else {
      res += ((count - 2) * (count - 1)) / 2;
      cha = nums[i] - nums[i - 1];
      count = 2;
    }
    if (i === nums.length - 1) res += ((count - 2) * (count - 1)) / 2;
  }
  return res;
};
// @lc code=end
