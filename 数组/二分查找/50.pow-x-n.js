/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) return 1;
  if (n === 1) return x;
  if (n < 0) return myPow(1 / x, -n);
  else {
    return n % 2 === 0
      ? myPow(x * x, n / 2)
      : myPow(x * x, Math.floor(n / 2)) * x;
  }
  // 二分法计算更快，注意n<0,n=0的情况，n=1是二分递归的终止条件
};
// @lc code=end
