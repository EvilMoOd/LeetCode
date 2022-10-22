/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  // if (num === 1) return true;
  let left = 0,
    right = Math.floor(num / 2);
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid * mid === num) return true;
    if (mid * mid > num) right = mid - 1;
    else left = mid + 1;
  }
  return false;
  // 这道题与69很像，不同在于该题要判断平方数，也就是说如果左右指针重合之前如果没有找到平方数，则确定该数非平方数
};
// @lc code=end
