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
  //回溯=循环+递归
  let resArr = [];
  function backTracking(startIndex, tempArr) {
    // 数组长度等于k时为终止条件，加入res数组中
    if (tempArr.length === k) {
      resArr.push(tempArr.slice());
      return;
    }
    for (let i = startIndex; i <= n - k + 1 + tempArr.length; i++) {
      tempArr.push(i);
      backTracking(i + 1, tempArr);
      tempArr.pop();
    }
  }
  backTracking(1, []);
  return resArr;
};
// @lc code=end
