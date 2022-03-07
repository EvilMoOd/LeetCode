/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    //比较相减后的数在keys中存在不存在，存在则返回索引，否则存入keys
    let keys = {}
    for (let i = 0, j = nums.length; i < j; i++) {
        let diff = target - nums[i]
        if (!isNaN(keys[diff])) {
            return [keys[diff], i]
        } else {
            keys[nums[i]] = i
        }
    }
};
// @lc code=end

