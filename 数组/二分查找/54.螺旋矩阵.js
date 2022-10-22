/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  // 模拟遍历过程
  if (matrix[0].length === 1) return matrix.flat();
  const res = [];
  let top = 0,
    bottom = matrix.length - 1,
    left = 0,
    right = matrix[0].length - 1;
  while (top <= bottom && left <= right) {
    // 这里采用非平均式的遍历方式主要便于3*3和4*3和3*4最内层的遍历,left和right重合时也至少遍历一次
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    for (let i = top + 1; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    if (top >= bottom || left >= right) return res; // 防止重复遍历，及时return(针对4*3或3*5可能重复遍历)
    for (let i = right - 1; i >= left; i--) {
      res.push(matrix[bottom][i]);
    }
    for (let i = bottom - 1; i > top; i--) {
      res.push(matrix[i][left]);
    }
    top++; 
    left++;
    bottom--;
    right--;
  }
  return res;
};
// @lc code=end
