/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length == 0) return 0;
  let cha = [];
  for (let i = 0; i < prices.length - 1; i++) {
    cha[i] = prices[i + 1] - prices[i];
  }
  let max = 0,
    count = 0;
  for (const i of cha) {
    max = Math.max((count += i), max);
    if (count < 0) count = 0;
  }
  return max;
};