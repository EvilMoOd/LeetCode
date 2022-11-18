/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  // 模拟，在于找到岛屿时，递归将其周边连续的土地置0，方便统计
  const turnZero = (i, j) => {
    if (
      i < 0 ||
      j < 0 ||
      i >= grid.length ||
      j >= grid[0].length ||
      grid[i][j] === '0'
    )
      return;
    grid[i][j] = '0';
    turnZero(i - 1, j);
    turnZero(i + 1, j);
    turnZero(i, j - 1);
    turnZero(i, j + 1);
  };
  let res = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        res++;
        turnZero(i, j);
      }
    }
  }
  return res;
};
// @lc code=end
