/*
 * @lc app=leetcode.cn id=1796 lang=javascript
 *
 * [1796] 字符串中第二大的数字
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
  let arr = s
    .replace(/[a-z]/g, '')
    .split('')
    .sort((a, b) => b - a);
  console.log(arr);
  let max = arr[0];
  for (let i of arr) {
    if (i < max) return i;
  }
  return -1;
};
// @lc code=end
