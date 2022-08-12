/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} 
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    len = nums.length
    k = k % len
    //复制一份需切割的长度
    add = nums.slice(len - k)
    //切掉
    nums.splice(len - k, len)
    // 然后在数组尾部加入
    for (let i = k - 1; i >= 0; i--) {
        nums.unshift(add[i])
    }
};
// @lc code=end

