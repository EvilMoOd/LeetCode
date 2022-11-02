/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let arr1 = [],
    arr2 = [];
  for (const i of s) i === '#' ? arr1.pop() : arr1.push(i);
  for (const i of t) i === '#' ? arr2.pop() : arr2.push(i);
  return arr1.join('') === arr2.join('');
};
// @lc code=end
