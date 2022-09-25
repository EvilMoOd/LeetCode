/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  // 排序后贪心,当下一个气球的左边界大于指定用箭气球右边界时，箭++
  if (points.length === 0) return;
  points.sort((a, b) => a[1] - b[1]);
  let arrow = 1;
  let pos = points[0][1];
  for (const i of points) {
    if (i[0] > pos) {
      pos = i[1];
      arrow++;
    }
  }
  return arrow;
};
// @lc code=end
