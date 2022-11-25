/*
 * @lc app=leetcode.cn id=733 lang=javascript
 *
 * [733] 图像渲染
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  // 递归，跟岛屿问题很像
  let flag = image[sr][sc];
  const dfs = (i, j) => {
    if (
      i < 0 ||
      j < 0 ||
      i >= image.length ||
      i >= image[0].length ||
      image[i][j] !== flag ||
      image[i][j] === color
    )
      return;
    image[i][j] = color;
    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  };
  dfs(sr, sc);
  return image;
};
// @lc code=end
