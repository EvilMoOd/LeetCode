/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  /* 递归回溯，本题使用一个极其暴力解法，以每个单元格作为起点，上下左右四个方向开始走,每走一格做一次判断，然后上下左右继续走（递归）
判断逻辑：1、单元格未越界，2、单元格未走过，3、单元格与目标字符相同。否则返回false
*/

  let walk = (i, j, k) => {
    // i,j是当前的坐标，k是word的索引
    if (
      i >= board.length ||
      i < 0 ||
      j >= board[0].length ||
      j < 0 ||
      board[i][j] !== word[k]
    )
      return false;
    // 走完一条字符串
    if (k === word.length - 1) return true;
    // 走过置空
    board[i][j] = '';
    // 当前字符已匹配，继续往四个方向走,记得字符串移动到下一个字符
    let res =
      walk(i - 1, j, k + 1) ||
      walk(i + 1, j, k + 1) ||
      walk(i, j - 1, k + 1) ||
      walk(i, j + 1, k + 1);
    // 走完后把字符还原，因为还要接着用
    board[i][j] = word[k];
    return res;
  };
  // 遍历每个单元格作为起点进行walk
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (walk(i, j, 0)) return true;
    }
  }
  return false;
};
// @lc code=end
