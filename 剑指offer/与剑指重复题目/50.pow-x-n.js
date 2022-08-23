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
  // 直接循环超时了，O（n）
  // let res = x;
  // while (n >= 2) {
  //   res *= x;
  // }
  // return res;
  // 二分法，用幂数/2，底数取平方的循环来计算结果
  let res = 1;
  // 负数取倒数
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  while (n) {
    if (n % 2 === 1) {
      res = res * x;
    }
    x *= x;
    n = Math.floor(n / 2);
  }
  return res;
  // TIPS：有序数组、平方，开方都可以用二分法
};
// @lc code=end
