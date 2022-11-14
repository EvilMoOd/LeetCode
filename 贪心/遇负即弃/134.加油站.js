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
  let res = 0,
    sum = 0,
    total = 0;
  for (let i = 0; i < gas.length; i++) {
    sum += gas[i] - cost[i];
    total += gas[i] - cost[i];
    if (sum < 0) {
      sum = 0;
      res = i + 1;
    }
  }
  return total < 0 ? -1 : res;
  // 贪心入门题，当前油差累计为负数时清零重新计数，说明该段路程不能作为起点，令找起点，若整体小于0说明不存在起点，若不为负说明肯定有起点
};
// @lc code=end
