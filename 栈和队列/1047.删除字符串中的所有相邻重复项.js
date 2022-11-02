/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let res = [];
  for (const i of s) {
    if (i === res[res.length - 1]) res.pop();
    else res.push(i);
  }
  return res.join('');
};
// @lc code=end
