/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  // 排序api，负数则a排前面，正数则b排前面
  // 总共有四种比较情况，奇数-1、偶数0；偶数0，奇数1；奇数-1、奇数1；偶数0、偶数0
  return nums.sort((a, b) => (-a % 2) + (b % 2));
};
