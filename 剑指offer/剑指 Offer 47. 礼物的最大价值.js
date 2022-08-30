/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
  // 跟机器人寻路很像，用动态规划解决，比较两条前置路径的值哪个更大
  if (grid.length === 0) return 0;
  for (let i = 1; i < grid.length; i++) {
    grid[i][0] = grid[i - 1][0] + grid[i][0];
  }
  for (let i = 1; i < grid[0].length; i++) {
    grid[0][i] = grid[0][i - 1] + grid[0][i];
  }
  for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid[0].length; j++) {
      grid[i][j] = Math.max(
        grid[i - 1][j] + grid[i][j],
        grid[i][j - 1] + grid[i][j]
      );
    }
  }
  return grid[grid.length - 1][grid[0].length - 1];
};
