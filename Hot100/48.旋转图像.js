/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    //两次对称
    for (let i = 0; i < matrix.length / 2; i++) {
        let temp = matrix[i]
        matrix[i] = matrix[matrix.length - 1 - i]
        matrix[matrix.length - 1 - i] = temp
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i + 1; j < matrix.length; j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    };
}
// @lc code=end

