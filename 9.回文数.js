/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    //反转相等
    let x2 = parseInt(x.toString().split("").reverse().join(""));
    return x2===x?true:false
};
// @lc code=end

