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
  let num = new Array(32).fill(0);
  for (let i of nums) {
    let j = num.length - 1;
    while (i) {
      num[j--] += i & 1;
      i >>= 1;
    }
  }
  let res = num.map((item) => item % 3).join('');
  return parseInt(res, 2);
};
// @lc code=end
