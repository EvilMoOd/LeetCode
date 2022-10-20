/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const n = nums.map((item) => item ** 2);
  let left = n.indexOf(Math.min(...n));
  let right = left + 1;
  const res = [];
  let i = 0;
  while (left >= 0 && right < nums.length)
    n[left] < n[right] ? (res[i++] = n[left--]) : (res[i++] = n[right++]);
  while (left >= 0) res[i++] = n[left--];
  while (right < nums.length) res[i++] = n[right++];
  return res;
  // 平方之后,找出最小的数,设两根指针从此往两边走,小到大填充到一个新数组中,三次遍历,时间复杂度为O(n)
};
// @lc code=end
