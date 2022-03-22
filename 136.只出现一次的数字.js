/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    //位运算，异或消消乐
    let result = 0
    for (let i = 0, j = nums.length; i < j; i++) {
        result ^= nums[i]
    }
    return result

};
// @lc code=end

