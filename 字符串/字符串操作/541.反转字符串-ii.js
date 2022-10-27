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
  let a = [];
  for (let i = 0; i < s.length; i += 2 * k)
    a.push(
      s
        .substring(i, i + k)
        .split('')
        .reverse()
        .join('')
        .concat(s.substring(i + k, i + 2 * k))
    );
  return a.join('');
};
// @lc code=end
