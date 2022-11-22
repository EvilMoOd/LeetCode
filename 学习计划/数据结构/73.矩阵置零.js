/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  // 先遍历一遍，将0元素添加到集合中，然后再遍历第二遍将行列做替换
  const zeroList = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) zeroList.push([i, j]);
    }
  }
  zeroList.forEach((item) => {
    matrix[item[0]] = new Array(matrix[0].length).fill(0);
    matrix.forEach((matrixLine) => {
      matrixLine[item[1]] = 0;
    });
  });
  return matrix;
};
// @lc code=end 
