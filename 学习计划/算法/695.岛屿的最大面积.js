/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  // 和岛屿问题一样通过沉岛解决，每次递归前设置一个全局变量统计size然后取每轮最大值即可
  let res = 0;
  const dfs = (i, j) => {
    if (
      i < 0 ||
      j < 0 ||
      i >= grid.length ||
      j >= grid[0].length ||
      grid[i][j] === 0
    )
      return;
    size++;
    grid[i][j] = 0;
    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  };
  let size = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      dfs(i, j, size);
      res = Math.max(res, size);
      size = 0;
    }
  }
  return res;
};
// @lc code=end
