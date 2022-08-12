/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  if (n < 4) return n - 1;
  let res = 1;
  // 从5以上开始贪心
  while (n > 4) {
    res = (res * 3) % (1e9 + 7);
    n -= 3;
  }
  // 记得乘最后余下来的n，顺便可以把n=4情况归纳进去
  return res * n;
};
