/*
 * @lc app=leetcode.cn id=1779 lang=javascript
 *
 * [1779] 找到最近的有相同 X 或 Y 坐标的点
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
  let res = -1;
  let min = Infinity;
  for (let i = 0; i < points.length; i++)
    if (x === points[i][0] || y === points[i][1]) {
      let distance = Math.abs(points[i][0] - x) + Math.abs(points[i][1] - y);
      if (distance < min) {
        min = distance;
        res = i;
      }
    }

  return res;
};
// @lc code=end
