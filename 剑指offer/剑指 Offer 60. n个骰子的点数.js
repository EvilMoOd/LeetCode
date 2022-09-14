/**
 * @param {number} n
 * @return {number[]}
 */
var dicesProbability = function (n) {
  /*  n个骰子的状态，可以由n-1个骰子的状态转移而来： 多出的一个骰子点数i ∈ [1,6]以1/6的均等概率出现，则对于n-1的每一个状态dp[n-1][sum]，dp[n][sum] = Σ((1/6) * dp[n-1][sum-i])；
可以用一个map保存n个骰子的概率分布，对于每一个n，最小点数为n，最大点数为6n，因此概率分布数组长度为5n+1；
迭代进行状态转移即可。 */

  let map = new Map();
  // i->多少个骰子，j->六个面，p当前骰子的概率数组索引
  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      map.set(i, new Array(6).fill(1 / 6));
    } else {
      let pre = map.get(i - 1);
      let cur = new Array(5 * i + 1).fill(0);
      for (let j = 0; j < 6; j++) {
        for (let p = 0; p < pre.length; p++) {
          cur[p + j] += (1 / 6) * pre[p];
        }
      }
      map.set(i, cur);
    }
  }
  return map.get(n);
};
