/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    //1.数组反转+正则。2.双指针
    let format = s.replace(/[^A-Za-z0-9]/gi, '').toLowerCase().split('');
    return format.join('') === format.reverse().join('');
};
// @lc code=end

