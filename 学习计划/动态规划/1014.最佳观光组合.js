/*
 * @lc app=leetcode.cn id=1014 lang=javascript
 *
 * [1014] 最佳观光组合
 */

// @lc code=start
/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function (values) {
  // 动态规划，将观光长度划分为value[i]+i和value[j]-j
  // 因为O（n2）超时，所以需要一次遍历AC，我们可以在遍历时只进行j层遍历，而i层遍历则在j遍历时省去
  // 具体操作为维护一个max值，也就是j之前value[i]+i最大值的位置作为起始观光点位，然后参与计算即可
  let res = 0;
  let max = 0;
  for (let i = 0; i < values.length; i++) {
    res = Math.max(res, max + values[i] - i);
    max = Math.max(max, values[i] + i);
  }
  return res;
};
// @lc code=end
