/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  // 区间问题，贪心排序,按有边界排序后，找出左右边界不重叠的区间个数，然后再求出需要omit掉的区间
  if (intervals.length == 0) return 0;
  intervals.sort((a, b) => a[1] - b[1]);
  let pos = intervals[0][1];
  let count = 1;
  for (const i of intervals) {
    if (i[0] >= pos) {
      pos = i[1];
      count++;
    }
  }
  return intervals.length - count;
};
// @lc code=end
