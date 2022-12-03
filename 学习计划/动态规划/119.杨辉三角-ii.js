/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  // 直接118copy过来稍微改一下即可
  const res = [[1], [1, 1]];
  for (let i = 2; i <= rowIndex; i++) {
    res[i] = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) res[i][j] = 1;
      else res[i][j] = res[i - 1][j] + res[i - 1][j - 1];
    }
  }
  return res[rowIndex];
};
// @lc code=end
