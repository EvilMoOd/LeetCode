/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let left = 0;
  let sum = nums[0];
  let res = Infinity;
  for (let right = 1; right <= nums.length; ) {
    if (sum < target) {
      sum += nums[right++];
    } else {
      res = Math.min(res, right - left);
      sum -= nums[left++];
    }
  }
  return res === Infinity ? 0 : res;
  // 注意题目说的是大于等于target,所以这里直接滑动窗口即可,窗口内和小于target则右指针右移,反之左指针右移,比较窗口最小值
};
// @lc code=end
