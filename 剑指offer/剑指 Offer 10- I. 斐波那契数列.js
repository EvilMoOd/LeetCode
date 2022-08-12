/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  // 递龟超时,所以使用冻龟
  if (n === 0) {
    return 0;
  } else if (n < 3) {
    return 1;
  } else {
    let res = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
      // 答案依照题目要求取模
      res[i] = (res[i - 1] + res[i - 2]) % (1e9 + 7);
    }
    return res[n - 1];
  }
};
