/**
 * @param {number} n
 * @return {number[]}
 */
var dicesProbability = function (n) {
  let pre = [1 / 6, 1 / 6, 1 / 6, 1 / 6, 1 / 6, 1 / 6];
  let cur = pre;
  for (let i = 2; i <= n; i++) {
    cur = new Array(5 * i + 1).fill(0);
    for (let j = 0; j < 6; j++) {
      for (let p = 0; p < pre.length; p++) {
        cur[p + j] += (1 / 6) * pre[p];
      }
    }
    pre = cur;
  }
  return cur;
  // 思路很简单，可以用表或者直接数组存储已递推的概率数组，然后往下dp就完事了
};
