/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let diff = {}
    for (let i = 0, j = nums.length; i < j; i++) {
        if (!isNaN(diff[nums[i]])) {
            return true
        } else {
            diff[nums[i]] = i
        }
    }
    return false
};
// @lc code=end

