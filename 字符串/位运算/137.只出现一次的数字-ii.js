/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // 将数组每一项转换成二进制，然后竖式计算，出现重复三次的元素相加后，每一位都是三的倍数，而加上唯一数字后，会使部分数字位余1，此时找出这些位再转成十进制即为答案
  let seen_once = 0,
    seen_twice = 0;
  nums.forEach((item) => {
    seen_once = ~seen_twice & (seen_once ^ item);
    seen_twice = ~seen_once & (seen_twice ^ item);
  });
  return seen_once;
};
// @lc code=end
singleNumber([1, 2, 2, 2]);
