/*
 * @lc app=leetcode.cn id=376 lang=javascript
 *
 * [376] 摆动序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  // 贪心，或者说是暴力？
  let res = 1;
  if (nums.length === 1) return res;
  let pre = 0,
    cur = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    cur = nums[i + 1] - nums[i];
    if ((cur > 0 && pre <= 0) || (cur < 0 && pre >= 0)) {
      res++;
      pre = cur;
    }
  }
  return res;
};
// @lc code=end
