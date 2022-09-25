/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  //回溯=循环+递归,本质上也是枚举，不过是树的枚举
  // 本体主要是递归枚举长度为k的数组组合
  let res = [];
  function backTracking(startIndex, path) {
    // 数组长度等于k时为终止条件，加入res数组中
    if (path.length === k) {
      res.push(path.slice());
      return;
    }
    for (let i = startIndex; i <= n - k + 1 + path.length; i++) {
      backTracking(i + 1, path.concat(i));
    }
  }
  backTracking(1, []);
  return res;

};
// @lc code=end
