/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // 贪心，排序合并即可
  if (intervals.length <= 1) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);
  let res = [intervals[0]];
  let lastIndex = 0;

  for (const i of intervals) {
    // 如果区间重合就更新右边界，否则插入新区间
    if (res[lastIndex][1] >= i[0]) {
      // 这里不能直接赋值而是要取最大值，[[1,4],[2,3]] 用例
      res[lastIndex][1] = Math.max(i[1], res[lastIndex][1]);
    } else {
      res.push(i);
      lastIndex++;
    }
  }
  return res;
};
// @lc code=end
