/*
 * @lc app=leetcode.cn id=1314 lang=javascript
 *
 * [1314] 矩阵区域和
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function (mat, k) {
  // 动态规划，构建dp数组累加四格数字，也就是从左上角累加到左下角，目的是为了方便计算
  // 通过k锁定边界，确定需要取的格子，在dp数组中进行计算
  // 一般在k范围内只需要取dp[i][j]即为当前的累加（dp的i、j比mat多1，看下面代码），但这样只能得到中心左上部分的累计和
  // 所以，需要用如下34行公式进行计算，得最右下角的值减去右上和左下（第1行和第1列累计值，因为重复操作左上角值，所以需要加回来）
  let m = mat.length;
  let n = mat[0].length;
  let res = Array.from(Array(m), () => Array(n).fill(0));
  let dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] =
        mat[i - 1][j - 1] + dp[i][j - 1] + dp[i - 1][j] - dp[i - 1][j - 1];
    }
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      let x0 = Math.max(i - k - 1, 0);
      let x1 = Math.min(i + k, m);
      let y0 = Math.max(j - k - 1, 0);
      let y1 = Math.min(j + k, n);
      res[i - 1][j - 1] = dp[x1][y1] - dp[x1][y0] - dp[x0][y1] + dp[x0][y0];
    }
  }
  return res;
};
// @lc code=end
