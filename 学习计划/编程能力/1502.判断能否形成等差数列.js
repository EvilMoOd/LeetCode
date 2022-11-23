/*
 * @lc app=leetcode.cn id=1502 lang=javascript
 *
 * [1502] 判断能否形成等差数列
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  // 暴力解决
  arr.sort((a, b) => a - b);
  let cha = arr[1] - arr[0];
  for (let i = 2; i < arr.length; i++)
    if (arr[i] - arr[i - 1] !== cha) return false;
  return true;
};
// @lc code=end
