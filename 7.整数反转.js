/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    //新变量
    let newA = 0;
    const MAX_VALUE = Math.pow(2, 31) - 1;
    const MIN_VALUE = MAX_VALUE * -1;

    while (x != 0) {
        newA = newA * 10 + x % 10
        if (newA > MAX_VALUE || newA < MIN_VALUE) {
            return 0
        }
        x = parseInt(x / 10)
    }
    return newA
};
// @lc code=end

