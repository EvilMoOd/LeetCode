/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;
  let s = n.toString(2);
  for (const i of s) {
    if (i === '1') count++;
  }
  return count;
};
