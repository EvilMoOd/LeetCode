/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
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
};
