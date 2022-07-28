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
    //双指针从两边开始，或者直接暴力解法
    let num = []
    for (let item of nums) {
        num.push(item * item);
    }
    num.sort((a, b) => a - b)
    return num
};
// @lc code=end

