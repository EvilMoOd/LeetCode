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
  // 一开始想用二维数组处理后拍平转换字符串，结果没想到可以直接遍历一遍层数将一维数组每一项fill一个空字符串，然后通过字符串拼接方式处理
  // 这题本质上就是遍历s然后将其在numRows个数组元素中摆动填入
  if (s.length <= numRows || numRows === 1) return s;
  let res = [];
  let l = 0,
    down = true;
  for (let i = 0; i < numRows; i++) res[i] = '';
  for (const i of s) {
    res[l] += i;
    down ? l++ : l--;
    if (l === numRows) {
      down = false;
      l -= 2;
    } else if (l === -1) {
      down = true;
      l += 2;
    }
  }
  return res.join('');
};
// @lc code=end
