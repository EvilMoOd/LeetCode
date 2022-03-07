/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    len = nums.length
    k = k % len
    add = nums.slice(len - k)
    nums.splice(len - k, len)
    for (let i = k - 1; i >= 0; i--) {
        nums.unshift(add[i])
    }
};
// @lc code=end

