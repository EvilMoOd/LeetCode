/*
 * @lc app=leetcode.cn id=1232 lang=javascript
 *
 * [1232] 缀点成线
 */

// @lc code=start
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  if (coordinates.length === 2) return true;
  const [x1, y1] = coordinates[0],
    [x2, y2] = coordinates[1];
  for (let i = 2; i < coordinates.length; i++) {
    const [x3, y3] = coordinates[i];
    // 判断是否在一条线上直接用斜率解决
    if ((x2 - x1) * (y3 - y1) !== (y2 - y1) * (x3 - x1)) return false;
  }
  return true;
};
// @lc code=end
