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
  if (!intervals.length) return 0;
  intervals.sort((a, b) => a[1] - b[1]);
  let res = 0;
  let right = intervals[0][1];
  for (const i of intervals) {
    if (i[0] >= right) right = i[1];
    else res++;
  }
  return res - 1; //排除遍历时包括自己
  // 这里用右边界代替数组删除操作，否则会超时
};
// @lc code=end
