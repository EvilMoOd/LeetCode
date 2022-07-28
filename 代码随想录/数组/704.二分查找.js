/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    // 二分查找有两种切入方式，第一是左开右开，第二是左开右闭
    let left = 0; right = nums.length - 1
    // 左闭右闭
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            return mid;
        }
        //找不到则返回-1
    };
    return -1
}
// @lc code=end

