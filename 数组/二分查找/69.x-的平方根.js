/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 2) return x;
  let left = 0,
    right = Math.floor(x / 2);
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid * mid === x) return mid;
    if (mid * mid > x) right = mid - 1;
    else left = mid + 1;
  }
  return right;
  // 该底数如果是整数，则mid遇到可以直接返回，如果介于两个整数之间，则
};
// @lc code=end
