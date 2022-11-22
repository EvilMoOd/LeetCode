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
  let cha = [
    coordinates[1][0] - coordinates[0][0],
    coordinates[1][1] - coordinates[0][1],
  ];
  for (let i = 2; i < coordinates.length; i++) {
    if (
      coordinates[i][0] - coordinates[i - 1][0] !== cha[0] ||
      coordinates[i][1] - coordinates[i - 1][1] !== cha[1]
    )
      return false;
  }
  return true;
};
// @lc code=end
