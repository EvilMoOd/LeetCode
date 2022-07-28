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
    //用map记录nums里的值，然后做差值比较，如果target-nums[i]=map里的值，则返回对应索引
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        if (map.has(diff)) { 
            return [map.get(diff), i]
        } else {
            map.set(nums[i], i)
        }
    }
};
// @lc code=end

