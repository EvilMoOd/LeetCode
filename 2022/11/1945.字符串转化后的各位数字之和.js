/*
 * @lc app=leetcode.cn id=1945 lang=javascript
 *
 * [1945] 字符串转化后的各位数字之和
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
  let str = '';
  for (const i of s) str += i.charCodeAt(0) - 96;
  let res = 0;
  for (let i = 0; i < k; i++) {
    res = str.split('').reduce((a, b) => +a + +b);
    str = res.toString();
  }
  return res;
};
// @lc code=end
