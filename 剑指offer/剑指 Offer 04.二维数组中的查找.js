/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  // 暴力
  const arr = matrix.filter(
    (item) => item[0] <= target && item[item.length - 1] >= target
  );
  for (let a of arr) {
    for (let i of a) {
      if (i === target) return true;
    }
  }
  return false;
  // 二维
};
