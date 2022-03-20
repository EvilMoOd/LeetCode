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
    // 二分法
    let left = 0, right = x;
    while (left <= right) {
        let mid = left + ((right - left) >> 1);
        if (mid * mid <= x) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    //向下取整故返回的是目标值-1，right
    return right
};
// @lc code=end

