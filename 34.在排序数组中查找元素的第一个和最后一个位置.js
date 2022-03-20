/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    // 二分查找找到左右边界，然后判断
    const getLeftBorders = (nums, target) => {
        let left = 0, right = nums.length - 1, leftBorder = -2;
        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2)
            if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1
                leftBorder = right
            }
        }
        return leftBorder
    }
    const getRightBorders = (nums, target) => {
        let left = 0, right = nums.length - 1, rightBorder = -2;
        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2)
            if (nums[mid] > target) {
                right = mid - 1
            } else {
                left = mid + 1;
                rightBorder = left
            }
        }
        return rightBorder
    }
    let leftBorder = getLeftBorders(nums, target)
    let rightBorder = getRightBorders(nums, target)
    //target在数组范围外
    if (leftBorder === -2 || rightBorder === -2) return [-1, -1];
    // target在数组范围内，存在和不存在
    if (rightBorder - leftBorder > 1) return [leftBorder + 1, rightBorder - 1];
    return [-1, -1];
};
// @lc code=end

