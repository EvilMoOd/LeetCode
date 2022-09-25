/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  // 暴力解法O（n2）不考虑
  // 贪心，从0累加，如果中途累加出现负数，说明不能从0-i这个范围取起点，因为遇到特耗油的点了
  let sum = 0, hasGas = 0, res = -1
  for (let i in gas) {
    hasGas = hasGas + gas[i] - cost[i]
    sum = sum + gas[i] - cost[i]
    if (hasGas < 0) {
      hasGas = 0
      res = +i + 1
    } else if (res === -1) {
      res = 0
    }
  }
  return sum < 0 ? -1 : res
};
// @lc code=end
