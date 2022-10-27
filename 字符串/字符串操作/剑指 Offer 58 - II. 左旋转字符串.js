/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  n %= s.length;
  return s.slice(n) + s.slice(0, n);
  // 和189题轮转数组一样
};
