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
  // 贪心，倒序遍历，如果小于前一位则将该位之后的位数置9，该位前一位-1（退位）
  let arr = `${n}`.split('');
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] < arr[i - 1]) {
      for (let j = i; j < arr.length; j++) {
        arr[j] = 9;
      }
      arr[i - 1]--;
    }
  }
  return +arr.join('');
};
// @lc code=end
