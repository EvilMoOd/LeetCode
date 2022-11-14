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
  points.sort((a, b) => a[1] - b[1]);
  let res = 1;
  let right = points[0][1];
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > right) {
      res++;
      right = points[i][1];
    }
  }
  return res;
  // 贪心，按右边界排序，取最右边界地方射箭，那么该边界往左的已排序气球都会被射爆,如果有大于目前右边界的气球则更新左边界
};
// @lc code=end
