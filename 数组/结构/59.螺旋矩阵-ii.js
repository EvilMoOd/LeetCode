/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let left = 0,
    right = n - 1,
    top = 0,
    bottom = n - 1;
  let num = 1;
  const res = Array.from(Array(n), () => Array(n));
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      res[top][i] = num++;
    }
    for (let i = top + 1; i <= bottom; i++) {
      res[i][right] = num++;
    }
    if (left >= right || top >= bottom) return res;
    for (let i = right - 1; i >= left; i--) {
      res[bottom][i] = num++;
    }
    for (let i = bottom - 1; i > top; i--) {
      res[i][left] = num++;
    }
    left++;
    right--;
    top++;
    bottom--;
  }
  return res;
  // 和螺旋矩阵思路差不多，只是这题是遍历一遍螺旋矩阵把数字填充上去，1则是提取数字
};
// @lc code=end
