/*
 * @lc app=leetcode.cn id=738 lang=javascript
 *
 * [738] 单调递增的数字
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function (n) {
  let arr = n.toString().split('');
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < arr[i - 1]) {
      for (let j = i; j < arr.length; j++) arr[j] = 9;
      arr[i - 1]--;
    }
  }
  return arr.join('');
  // 贪心，如果某一位比前一位小，则该位以及后面全部向下取到9
};
// @lc code=end
