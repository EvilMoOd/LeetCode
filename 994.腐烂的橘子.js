/*
 * @lc app=leetcode.cn id=994 lang=javascript
 *
 * [994] 腐烂的橘子
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  // 学习计划算法
  let total = 0,
    rot = 0,
    times = 0,
    queue = [];
  const m = grid.length,
    n = grid[0].length;
  for (let i = 0; i < m; i++) {
    // 遍历grid, 确定🍊总数，及将腐烂🍊放入队列
    for (let j = 0; j < n; j++) {
      grid[i][j] && total++; //该网格非0，说明是有🍊(可能好可能坏)总数++
      if (grid[i][j] === 2) {
        queue.push([i, j]);
        rot++;
      }
    }
  }
  if (rot === total) return 0; //遍历完grid, 发现都是坏橘子，直接return
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]; //向四个方向腐烂
  while (queue.length) {
    // 开始bfs
    let len = queue.length;
    if (rot === total) return times; //最后一遍都感染完了rot=total 直接返回
    while (len--) {
      let [r, c] = queue.shift();
      for (let i = 0; i < 4; i++) {
        let row = r + dirs[i][0];
        let col = c + dirs[i][1];
        if (row < 0 || row >= m || col < 0 || col >= n) continue;
        if (grid[row][col] === 1) {
          grid[row][col] = 2;
          rot++; // 每次新感染一个好橘子，rot数量++
          queue.push([row, col]);
        }
      }
    }
    times++;
  }
  return rot === total ? times : -1; // 最后有可能有触及不到的好橘子 返回-1
};
// @lc code=end
