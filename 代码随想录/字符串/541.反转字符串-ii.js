/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  //每隔2k取反转一次，暴力反转即可
  let arr = s.split("")
  let len = s.length
  for (let i = 0; i < len; i += 2 * k) {
    let l = i - 1, r = i + k > len ? len : i + k
    while (++l < --r) {
      [arr[l], arr[r]] = [arr[r], arr[l]]
    }
  }
  return arr.join("")
};
// @lc code=end

