/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (s.length <= numRows || numRows === 1) return s;//横竖直接返回
  const res = Array(numRows).fill('');
  let row = 0;
  let col = 0;
  let down = true;
  for (let c of s) {
    if (down) {
      res[row] += c;
      row === numRows - 1 ? (down = false) : row++;
    } else {
      col++;
      row--;
      res[row] += c;
      if (row === 0) {
        down = true;
        row++;
      }
    }
  }
  return res.join('');
  // 模拟一遍即可，这里不用二维数组，因为是字符串，所以一维数组代表行，列方向直接用字符串就行了
};
// @lc code=end
