/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // 转换成数组用api解决
  return s.trim().split(/\s+/).reverse().join(' ');
  // 当然，这题主要考双指针反转
};
