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
  //模拟，不是特别熟悉，得再练
  const result = Array.from(Array(n), () => Array(n).fill(0))//初始化一个二维数组
  let currentValue = 1;//初始值
  let [left, right, top, bottom] = [0, n - 1, 0, n - 1];//边界
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      result[top][i] = currentValue;
      currentValue++;
    }
    for (let i = top + 1; i <= bottom; i++) {
      result[i][right] = currentValue;
      currentValue++;
    }
    for (let i = right - 1; i >= left; i--) {
      result[bottom][i] = currentValue;
      currentValue++;
    }
    for (let i = bottom - 1; i > top; i--) {
      result[i][left] = currentValue;
      currentValue++;
    }
    left++;
    top++;
    right--;
    bottom--;
  }
  return result;
};
// @lc code=end

