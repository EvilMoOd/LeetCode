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
    // 二分查找
    //先求其向下取整的平方根right
    let left = 0, right = num;
    while (left <= right) {
        let mid = left + ((right - left) >> 1);
        if (mid * mid <= num) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return right * right === num ? true : false;
};
// @lc code=end

